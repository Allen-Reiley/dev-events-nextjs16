import { NextRequest } from 'next/server';
import connectDB from '../../../lib/mongodb'

export async function POST(req: NextRequest){
    try{
        await connectDB()
    } catch (e){
        console.error(e);
        return NextResponse.json(message: 'Event Creation Failed', error: e ? instanceof Error ? e.message: 'unknown')
    }
}