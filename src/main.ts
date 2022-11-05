export interface mainResult {
  secret: string;
}
export default function main(): mainResult {
  console.log('I am an action');
  const mySecret = process.env.MY_ACTION_SECRET;
  return { secret: mySecret || '' };
}

main();
