import fs from "fs/promises";
import path from "path";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const filePath = path.join(process.cwd(), "public", "posts-challenge-data-added", "addPost.json");

        const readFile = await fs.readFile(filePath, { encoding: 'utf-8' });
        if (!readFile) {
            // scrivi direttamente il body
            await fs.writeFile(filePath, JSON.stringify(body, null, 2));

            return Response.json({
                success: true,
                message: "dati riscritti in locale",
                data: readFile,
                status: 200
            }, { status: 200 });
        }
        return Response.json({
            success: false,
            message: "File vuoto o corrotto",
            data: null,
            status: 404,
        }, { status: 404 });

    } catch (error: Error | unknown) {
        return Response.json({
            success: false,
            message: error instanceof Error ? error.message : error,
            data: error,
            status: 500,
        }, { status: 500 });
    }
};