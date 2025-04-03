import Image from "next/image";
import { Card, CardContent, CardFooter } from "../ui/card";
import ShoppingCartIcon from "../icons/shopping-cart-icon";


export default function ProductCard(): JSX.Element {

  return (
    <Card className="w-[350px] my-4 mx-auto embla__slide">
      <CardContent className="flex justify-center bg-white w-full h-[200px]">
        <Image
          src='/images/duff-beer.webp'
          alt='Product card'
          width={350}
          height={0}
          className="object-contain"
        />
      </CardContent>
      <hr />
      <CardFooter className="flex justify-between">
        <div className="flex flex-col gap-2">
          <p>Duff Beer</p>
          <p className="text-sm text-gray-500">Bebidas</p>
        </div>
        <div className="flex gap-4">
          <p>3€</p>
          <ShoppingCartIcon />
        </div>
      </CardFooter>
    </Card>
  )
}