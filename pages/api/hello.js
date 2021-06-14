// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


const data = [
  {calories:161, carbs:24, fat: 6,name: "Frozen yoghurt",protein: 4},
  {calories:237, carbs:37, fat: 9,name: "Ice cream sandwich",protein: 4.3},
  {calories:262, carbs:24, fat: 16.0,name: "Eclair",protein: 6.0},
  {calories:305, carbs:67, fat: 3.7,name: "Cupcake",protein: 4.3},
  {calories:356, carbs:49, fat:  16.0,name: "Gingerbread",protein: 3.9},

]



export default (req, res) => {
  res.status(200).json(data)
}
