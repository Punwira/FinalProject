import React  from 'react'
import { BlogpostContainer ,Blogcard ,PostTitle, PostedBy,PostImage,Contentp,Contentheader,ContentConclusion} from './BlogElements' 
import { BsPersonCircle ,BsCalendar} from "react-icons/bs";
import nutrition1 from '../../images/nutrition1.jpg'
import nutrition2 from '../../images/nutrition2.jpg'
import nutrition3 from '../../images/nutrition3.jpg'
import nutrition4 from '../../images/nutrition4.jpg'
import nutrition5 from '../../images/nutrition5.jpg'
import nutrition6 from '../../images/nutrition6.jpg'

const Blog5 = () => {
  return (
    <>
      <BlogpostContainer >
            <Blogcard>
            <PostTitle>ความจริงของ โภชนาการการคุมอาหาร ที่คุณอาจยังไม่รู้</PostTitle>
            <PostedBy>
              <BsPersonCircle class="iconperson"/> By: Calories 
              <BsCalendar class="iconcalendar" /> Updated: เมษายน 24, 2022
            </PostedBy>
            <PostImage src={nutrition1}/>
                <Contentp>ความจริงของ โภชนาการการคุมอาหาร ที่คุณอาจยังไม่รู้ ซึ่งวิธีการคุมอาหารสำหรับผู้ที่มีน้ำหนักเกินนั้นมีหลายตำราได้ให้ข้อเสนอไว้หลายวิธี 
                  อาจจะแตกต่างกันไปทั้งในเรื่องของระยะเวลาการกิน ปริมาณ และสัดส่วนของอาหาร โภชนาการอาหาร คือการศึกษาข้อมูลเกี่ยวกับอาหาร เครื่องดื่ม และยาต่างๆที่เรารับเข้าสู่ร่างกายของเราด้วยการกิน 
                  ในบทความนี้เราจะมาเจาะลึกกันว่า โภชนาการการคุมอาหาร ตามหลักโภชนาการ ควรได้รับสารอาหารแต่ละประเภทและควรจัดสัดส่วนอย่างไร
                </Contentp>
            <Contentheader>โภชนาการคืออะไร</Contentheader>
                <Contentp>โภชนาการ หมายถึง การศึกษาเรื่องต่างๆเกี่ยวกับการรับสารอาหาร น้ำ และยาเข้าสู่ร่างกายแล้วมีผลต่อร่างกายเราไม่ว่าจะเป็นการให้พลังงาน การรักษาโรคหรือเพื่อพัฒนาการของร่างกาย 
                  เป็นการศึกษาข้อดีข้อเสียของการรับสารอาหารเข้าสู่ร่างกายในปริมาณต่างๆ และบทบาทของอาหารที่มีต่อร่างกายเพื่อให้ระบบต่างๆ ทำงานเป็นปกติ
                </Contentp>
            <Contentheader>ประเภทของ สารอาหาร</Contentheader>
            <Contentheader>1. คาร์โบไฮเดรต</Contentheader>
                <PostImage src={nutrition2}/>
                <Contentp>
                หรือที่เรามักจะเจอเข้าใจว่ามันคือแป้งต่างๆ เป็นแหล่งพลังงานสำคัญของร่างกาย แต่รู้หรือไม่ว่าไฟเบอร์และน้ำตาลที่อยู่ในผักผลไม้ที่เรากินกันอยู่ทุกวันนี้ก็ถือเป็นคาร์โบไฮเดรตชนิดหนึ่งเช่นกัน 
                ซึ่งน้ำตาลนั้นเป็นแหล่งให้พลังงานที่รวดเร็วแต่ไม่ทำให้ทำรู้สึกอิ่ม ดังนั้นเราจึงกินของหวานได้เรื่อยๆ นั่นเอง
                </Contentp>
            
            <Contentheader>2. โปรตีน</Contentheader>
                <PostImage src={nutrition3}/>
                <Contentp>เป็นสารอาหารที่สำคัญเพราะจะเป็นตัวช่วยในการซ่อมแซมอวัยวะต่างๆ ของร่างกาย โดยเราจะพบโปรตีนได้มากในเนื้อสัตว์ ถั่วและธัญพืชบางชนิด ซึ่งโปรตีนไม่ใช่สารอาหารที่ร่างกายจะสะสมไว้ได้ 
                  จึงควรบริโภคโปรตีนทุกวันในปริมาณที่เหมาะสม นั่นคือโปรตีน 1 กรัม/ น้ำหนักตัว 1 กิโลกรัม และโปรตีนยังเป็นสารอาหารที่ร่างกายต้องใช้พลังงานในการเผาผลาญมากที่สุดอีกด้วย</Contentp>
            <Contentheader>3. ไขมัน</Contentheader>
            <PostImage src={nutrition4}/>
              <Contentp>ไขมันเป็นสารอาหารประเภทหนึ่งที่จำเป็นกับร่างกายมาก เนื่องจากไขมันมีบทบาทในระบบต่างๆของร่างกาย ทั้งเป็นตัวหล่อลื่นของข้อต่อ, ช่วยในการผลิตฮอร์โมน ให้พลังงาน, 
                ให้ความอบอุ่นแก่ร่างกาย, ลดการอักเสบและช่วยให้ร่างกายสามารถดูดซึมวิตามินบางชนิดได้ ร่างกายจึงควรมีไขมันบ้างแต่หากร่างกายมีไขมันสะสมที่มากเกินไปก็จะส่งผลให้เกิดโรคต่างๆ ตามมาได้</Contentp>
                <Contentheader>4. วิตามิน</Contentheader>
            <PostImage src={nutrition5}/>
              <Contentp>วิตามินเป็นสารอาหารที่สำคัญ มีหน้าที่ช่วยกระตุ้นและควบคุมการทำงานของระบบต่างๆ ในร่างกาย แบ่งเป็น 2 ประเภทคือวิตามินที่ละลายได้ในน้ำและวิตามินที่ละลายได้ในไขมันซึ่งต้องใช้ไขมัน
                ในการดูดซึมเข้าสู่ร่างกาย ร่างกายของเราต้องการวิตามินในปริมาณที่เล็กน้อย แต่ก็ขาดไม่ได้</Contentp>
                <Contentheader>5. เกลือแร่</Contentheader>
            <PostImage src={nutrition6}/>
              <Contentp>เกลือแร่เป็นอีกหนึ่งสารอาหารที่มีความจำเป็นต่อร่างกายมาก โดยเกลือแร่ทำหน้าที่รักษาความสมดุลต่างๆในร่างกายและยังช่วยให้อวัยวะต่างๆ เจริญเติบโตอย่างเป็นปกติด้วย 
                เราจึงควรกินอาหารให้หลากหลายเพื่อรับเกลือแร่ต่างๆ ให้ครบ</Contentp>
                
                <Contentheader>โภชนาการทำให้อ้วนได้ยังไง</Contentheader>
                <Contentp>การกินอาหารนั้นหากเราไม่คำนึงถึงสิ่งที่ได้รับเข้าไปหรือสัดส่วนของสารอาหารอาจทำให้เกิดผลกระทบที่ร้ายแรงตามมาได้ เช่น ความดัน โรคเบาหวาน การเจริญเติบโตผิดปกติ 
                  หรืออาจทำให้ร่างกายเกิดความผิดปกติ เช่น การกินสารอาหารที่ให้พลังงานอย่างคาร์โบไฮเดรตมากเกินไปในขณะที่ร่างกายไม่ได้ใช้พลังงานในแต่ละวันเลยจะทำให้เกิดไขมันสะสมต่างอวัยวะต่างๆ ได้และหากมีมากๆ อาจเป็นสาเหตุหนึ่งของโรคต่างๆ ตามมาได้</Contentp>
            
              </Blogcard>
        </BlogpostContainer>
    </>
  )
}

export default Blog5
