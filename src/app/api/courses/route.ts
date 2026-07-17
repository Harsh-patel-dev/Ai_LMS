import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Demo courses - replace with actual Supabase query
    const courses = [
      {
        id: 1,
        title: 'Web Development Masterclass',
        description: 'Learn web development from scratch',
        instructor: 'John Doe',
        price: 99.99,
        rating: 4.8,
        students: 245,
      },
      {
        id: 2,
        title: 'Machine Learning Basics',
        description: 'Introduction to machine learning',
        instructor: 'Jane Smith',
        price: 129.99,
        rating: 4.9,
        students: 180,
      },
      {
        id: 3,
        title: 'Data Science Pro',
        description: 'Advanced data science concepts',
        instructor: 'Mike Johnson',
        price: 149.99,
        rating: 4.7,
        students: 156,
      },
    ];

    return NextResponse.json(
      {
        success: true,
        data: courses,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, description, price, category } = body;

    // Demo course creation - replace with actual Supabase insert
    if (title && description && price) {
      return NextResponse.json(
        {
          success: true,
          message: 'Course created successfully',
          course: {
            id: Math.random().toString(36).substr(2, 9),
            title,
            description,
            price,
            category,
            instructor: 'Demo Teacher',
          },
        },
        { status: 201 }
      );
    }

    return NextResponse.json(
      { success: false, message: 'Missing required fields' },
      { status: 400 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
