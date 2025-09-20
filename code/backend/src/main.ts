import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import type { Request, Response } from 'express';
import prismaa from './lib/prisma.js';
 
const app = express();
app.use(express.json());
const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';


app.get('/', (req: Request, res: Response) => {
  res.send('Server is alive 🚀');
});


app.post('/api/signin', async (req: Request, res: Response) => {
  try {const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }
    const user = await prismaa.teacher.findUnique({
      where: { email },
    });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: '1h' }
    );
    res.json({ message: 'Sign-in successful', token });} catch (err: unknown) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.post('/api/signup', async (req: Request, res: Response) => {
  try {const { email, password} = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }
    const hashed = await bcrypt.hash(password,11)
    const user = await prismaa.teacher.create({
      data:{
        email:email,
        password:hashed
      }
    })
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: '1h' }
    );
    res.json({ message: 'Sign-up successful', token });} catch (err: unknown) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.get('/api/data',async (req: Request, res: Response) => {
  try {
    const { token, stclass} = req.body;
    if (!token || !stclass) {
      return res.status(400).json({ error: 'data insuffiecient' });
    }
    const data = await prismaa.class.findFirst({
      where:{className:stclass},
      select:{students:{select:{id:true,name:true,records:{select:{id:true,date:true,status:true}}}}}
    })
    if(!data){
      return res.json({message:"no data here"})
    }
    res.json(data.students)
} catch (err: unknown) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }})

  app.post('/api/class', async (req: Request, res: Response) => {
  try {
    const { teacherId, className } = req.body;
    if (!teacherId || !className) {
      return res.status(400).json({ error: 'Teacher ID and class name are required' });
    }

    const newClass = await prismaa.class.create({
      data: {
        className,
        teacherId,
      },
    });

    res.json({ message: 'Class created', class: newClass });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
});


app.post('/api/student', async (req: Request, res: Response) => {
  try {
    const { classId, name } = req.body;
    if (!classId || !name) {
      return res.status(400).json({ error: 'Class ID and student name are required' });
    }

    const student = await prismaa.student.create({
      data: {
        name,
        classId,
      },
    });

    res.json({ message: 'Student added', student });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
});


app.post('/api/attendance', async (req: Request, res: Response) => {
  try {
    const { studentId, status } = req.body;
    if (!studentId || !status) {
      return res.status(400).json({ error: 'Student ID and status are required' });
    }

    const record = await prismaa.attendance.create({
      data: {
        studentId,
        status,
        date: new Date(),
      },
    });

    res.json({ message: 'Attendance marked', record });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});