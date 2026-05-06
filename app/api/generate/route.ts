import { NextResponse } from 'next/server';
import { buildMockResult } from '@/lib/mock';

export async function POST(request: Request) {
  const body = await request.json() as { url?: string };

  if (!body.url) {
    return NextResponse.json({ error: 'Video URL is required.' }, { status: 400 });
  }

  return NextResponse.json({ result: buildMockResult(body.url) });
}
