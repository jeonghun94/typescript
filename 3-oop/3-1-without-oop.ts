{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
    coffeeBeans: number;
  };

  const BEANS_GRAMM_PER_SHOT: number = 7;
  let coffeeBeans: number = 0;

  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error("Not enough coffee beans!");
    }
    coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
    return {
      shots,
      hasMilk: true,
      coffeeBeans,
    };
  }

  coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;
  const coffee = makeCoffee(1);
  console.log(coffee);
}

/** 
  1.캡슐화(데이터를 외부에서 보이게 할지 말지 정함) 
  2.추상화(인터페이스) 버튼을 눌러 무엇을 함
  3.상속
  4.다형성(다양한 형태, 공통된 함수)
*/
