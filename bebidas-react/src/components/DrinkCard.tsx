import type { DrinkAPIResponse } from "../types"

type DrinkCardProps = {
    drink: DrinkAPIResponse
}
export default function DrinkCard({drink}: DrinkCardProps) {
  return (
    <div>
        <h2>
            {drink.strDrink}
        </h2>
    </div>
  )
};

