import fs from "fs/promises";
import path from "path";
import { typicodeApiProps } from "@/app/homeComponent";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const inferBody = body as Omit<typicodeApiProps, "userId" | "id">;

        const filePath = path.join(process.cwd(), "public", "posts-challenge-data-added", "addPost.json");

        const readFile = await fs.readFile(filePath, { encoding: 'utf-8' });
        if (!readFile) {
            return Response.json({
                success: false,
                message: "File vuoto o corrotto",
                data: null,
                status: 404,
            }, { status: 404 });
        }

        const parsedReadFile = JSON.parse(readFile) as typicodeApiProps[];
        console.log("FIle originario: ", parsedReadFile);
        const last = parsedReadFile[parsedReadFile.length - 1];
        const newId = last ? last.id + 1 : 1;
        const newUserId = last ? last.userId + 1 : 1;

        const newPost: typicodeApiProps = {
            userId: newUserId,
            id: newId,
            ...inferBody,
        };

        const newAdded: typicodeApiProps[] = [...parsedReadFile, newPost];
        const jsonNewAdded = JSON.stringify(newAdded);
        await fs.writeFile(filePath, jsonNewAdded);

        return Response.json({
            success: true,
            message: "Dati aggiunti al file",
            data: jsonNewAdded,
            status: 200,
        }, { status: 200 });

    } catch (error: Error | unknown) {
        return Response.json({
            success: false,
            message: `${error instanceof Error ? error.message : error}`,
            data: error instanceof Error ? error.cause : error,
            status: 500,
        }, { status: 500 });
    }
};


export async function GET() {
    try {
        const filePath = path.join(
            process.cwd(),
            "public",
            "posts-challenge-data-added",
            "addPost.json"
        );

        const readFile = await fs.readFile(filePath, "utf-8");

        if (!readFile.trim()) {
            return Response.json(
                {
                    success: false,
                    message: "File vuoto o corrotto",
                    data: null,
                    status: 404,
                },
                { status: 404 }
            );
        }

        const parsed = JSON.parse(readFile);

        return Response.json(
            {
                success: true,
                message: "Dati recuperati",
                data: parsed, // <-- ARRAY, non stringa
                status: 200,
            },
            { status: 200 }
        );
    } catch (error) {
        return Response.json(
            {
                success: false,
                message: error instanceof Error ? error.message : error,
                status: 500,
            },
            { status: 500 }
        );
    }
}
