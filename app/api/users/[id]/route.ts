import { NextRequest, NextResponse } from "next/server";

interface Params {
  id: string;
}

interface RouteParams {
  params: Params;
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  const userId = params.id;
  return NextResponse.json({ body: userId });
}
