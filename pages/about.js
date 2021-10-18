
import Test from '../src/components/Test';
export default function about() {
  return (
    <div>
      this is About
      <Test>{'hello'}</Test>
    </div>
  )
}
//해당 page자체가 children이 되는것

about.getLayout = function getLayout(page){
  return(
    <Test>
      {page}
    </Test>
  )
}