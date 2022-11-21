// need a function that repeats. for loop?

function ball(height, bounce) {
  let num = 0


  if ( height * bounce <= 1.5 ) 
  { num -= 1
  console.log(num)}

  else { 
    for ( let i = height ; i = 1.5 ; i * bounce) 
   {num += 2}

  }
  return num
  console.log(num)
}



// having difficulty getting a for loop to work because i am an idiot




/* 
DESCRIPTION:
A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.

He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

Three conditions must be met for a valid experiment:
Float parameter "h" in meters must be greater than 0
Float parameter "bounce" must be greater than 0 and less than 1
Float parameter "window" must be less than h.
If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

Note:
The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

Examples:
- h = 3, bounce = 0.66, window = 1.5, result is 3

- h = 3, bounce = 1, window = 1.5, result is -1 

(Condition 2) not fulfilled).*/
