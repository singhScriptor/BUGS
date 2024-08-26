function studentMarks(marks){
    const grade=marks>75 ? "A":
                marks>60 ? "B" :
                marks>50 ? "C":"D";
    console.log(grade)
  }
  let marks=45
  studentMarks(marks)