import ProductCard from "@/components/product-card";

export default function Catalog() {
    return (
        <div className="flex flex-col justify-center items-center p-8 gap-8">
            <div className="flex flex-col justify-center items-center max-w-6xl gap-8">
                <h2 className="border-b-2 pb-2 w-full text-center">Torturi</h2>
                <div className="flex flex-wrap justify-center items-center max-w-6xl gap-8">
                    <ProductCard title="Produs 1" image="/cake.png" price="185,00 lei/kg" />
                    <ProductCard title="Produs 2" image="/cake.png" price="185,00 lei/kg" />
                    <ProductCard title="Produs 3" image="/cake.png" price="185,00 lei/kg" />
                    <ProductCard title="Produs 4" image="/cake.png" price="185,00 lei/kg" />
                    <ProductCard title="Produs 5" image="/cake.png" price="185,00 lei/kg" />
                    <ProductCard title="Produs 6" image="/cake.png" price="185,00 lei/kg" />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center max-w-6xl gap-8">
                <h2 className="border-b-2 pb-2 w-full text-center">Prajituri</h2>
                <div className="flex flex-wrap justify-center items-center max-w-6xl gap-8">
                    <ProductCard title="Produs 1" image="/cake.png" price="185,00 lei/kg" />
                    <ProductCard title="Produs 2" image="/cake.png" price="185,00 lei/kg" />
                    <ProductCard title="Produs 3" image="/cake.png" price="185,00 lei/kg" />
                    <ProductCard title="Produs 4" image="/cake.png" price="185,00 lei/kg" />
                    <ProductCard title="Produs 5" image="/cake.png" price="185,00 lei/kg" />
                    <ProductCard title="Produs 6" image="/cake.png" price="185,00 lei/kg" />
                </div>
            </div>
        </div>
    );
}
