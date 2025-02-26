import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const { userId, password, name, email, birthdate, phoneNumber } = await request.json();

  if (!userId || !password || !name || !email || !birthdate || !phoneNumber) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const existingUser = await prisma.user.findFirst({
    where: { OR: [{ userId }, { email }] },
  });

  if (existingUser) {
    return NextResponse.json({ error: 'User ID or Email already exists' }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        userId,
        name,
        email,
        password: hashedPassword,
        birthdate,
        phoneNumber,
      },
    });
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Registration failed' }, { status: 500 });
  }
}