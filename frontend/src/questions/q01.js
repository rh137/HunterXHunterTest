const q01 = {
  isSingleSelection: true,
  header: "Q1.",
  question: "有一天你走在路上看到兩隻被拋棄的黑貓，你會怎麼做？",
  options: [
    {
      id: "A",
      body: "帶回家",
      next: "q02a"
    },
    {
      id: "B",
      body: "不帶回家",
      next: "q02b"
    }
  ],
}

export default q01;