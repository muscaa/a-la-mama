import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center gap-4 h-[1500px]">
            <Button>Click me</Button>
            <Button variant="secondary">Click me</Button>
        </div>
    );
}
