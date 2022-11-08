import chalk from 'chalk';
import  { suma, multiplica }  from "./controller.js";

const result = suma(1,2);
const result2 = suma(4,5) ;

console.log(chalk.green(multiplica(result,result2)));



