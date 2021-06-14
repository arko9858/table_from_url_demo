// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


const data = [
    {calories:211, carbs:51, fat: 6.2,name: "Jellybean",protein: 6},
    {calories:347, carbs:31, fat: 9,name: "Oreo",protein: 2.5},
    {calories:146, carbs:47, fat: 2.8,name: "Kitkat",protein: 7},
    {calories:289, carbs:25, fat: 5,name: "Marshmello",protein: 5.2},
    {calories:524, carbs:79, fat:  4,name: "Honeycomb",protein: 6.1},
  
  ]
  
  
  
  export default (req, res) => {
    res.status(200).json(data)
  }
  