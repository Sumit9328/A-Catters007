import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Log the query data
    console.log('Query received:', JSON.stringify(body, null, 2));
    
    // Store in JSON file (optional - for persistence)
    const dataDir = join(process.cwd(), 'data', 'queries');
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `query-${timestamp}.json`;
    
    try {
      await mkdir(dataDir, { recursive: true });
      await writeFile(
        join(dataDir, filename),
        JSON.stringify(body, null, 2),
        'utf-8'
      );
    } catch (error) {
      console.error('Error saving query file:', error);
      // Continue even if file save fails
    }
    
    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Query submitted successfully',
        data: body 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing query:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Error processing query' 
      },
      { status: 500 }
    );
  }
}

