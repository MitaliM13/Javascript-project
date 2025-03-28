import {useScroll, motion, useSpring, useTransform} from 'framer-motion'

function Header() {

  const {scrollYProgress} = useScroll()

  const scaleX = useSpring(scrollYProgress)

  const background = useTransform(scrollYProgress,
    [0, 1],
    ["rgb(86,3,13)", "rgb(54,9,245)"]
  )

  return (
    <div>
      <motion.div
        style={{
          // scaleX:scrollYProgress,
          scaleX:scaleX,
          // background:'black',
          background,
          position:'sticky',
          transformOrigin: "left",
          top: 0,
          width: "100%",
          height: "20px"
        }}
      /> 
      <div className='p-10'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, mollitia. Esse officia doloremque numquam nisi ipsa accusantium ea, tenetur vitae asperiores nihil deleniti recusandae consectetur sit, accusamus hic veniam vero.
        Labore libero velit pariatur explicabo ratione harum natus sunt ipsa facilis dolorum aperiam doloribus dolor hic provident non, id at aliquid voluptatibus ullam recusandae culpa maiores et. Dignissimos, porro unde.
        Ullam nihil aperiam fugit? Accusantium neque incidunt, magni nemo porro voluptate laudantium laborum iste quas autem? Modi a quos culpa, officia eius dolores blanditiis repudiandae, est corporis architecto, necessitatibus doloremque.
        Nesciunt, quod molestiae. At quasi ipsum, similique facilis reiciendis accusamus in corporis nostrum incidunt perspiciatis quam magni tempora assumenda tenetur? Vitae, mollitia aliquam blanditiis dolores asperiores assumenda! Et, eos adipisci.
        Voluptates natus placeat aspernatur harum, nisi nostrum pariatur debitis. Ad atque quae enim recusandae laborum facilis, repudiandae iusto expedita magni veritatis nulla, quia, dolores excepturi incidunt nihil saepe aut quas.
        Veniam dignissimos cumque iure repudiandae dolores consequuntur dolor ipsum similique voluptates possimus. Voluptate sequi doloremque neque odio in voluptatem dolore, maiores, laudantium voluptates obcaecati, aliquam soluta fugiat a quos at?
        Asperiores atque temporibus, itaque aspernatur eius excepturi sapiente iste, a vitae dolor odio voluptates repellendus ex officia assumenda nostrum enim quaerat. Modi possimus velit quibusdam doloribus, asperiores maiores libero dolorem.
        Dignissimos laboriosam, vitae deserunt voluptatum, dolorem aut quibusdam labore aliquid, adipisci cumque quam aspernatur officiis! Minus fuga quaerat pariatur ullam quasi explicabo vero, itaque accusamus. Quidem corrupti voluptatum obcaecati eius!
        Tempora ducimus reprehenderit maxime ipsum labore unde, expedita ipsa dolorem aperiam et adipisci a qui officiis, cumque magnam eaque debitis dolores exercitationem perferendis voluptate aliquid asperiores nemo commodi? Voluptatem, adipisci.
        Mollitia a vero numquam. Magnam doloribus, totam consequatur vel at repellendus hic nesciunt ullam esse perferendis nam minus ratione, ipsum maiores id sequi blanditiis iusto animi possimus numquam tenetur corrupti.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, mollitia. Esse officia doloremque numquam nisi ipsa accusantium ea, tenetur vitae asperiores nihil deleniti recusandae consectetur sit, accusamus hic veniam vero.
        Labore libero velit pariatur explicabo ratione harum natus sunt ipsa facilis dolorum aperiam doloribus dolor hic provident non, id at aliquid voluptatibus ullam recusandae culpa maiores et. Dignissimos, porro unde.
        Ullam nihil aperiam fugit? Accusantium neque incidunt, magni nemo porro voluptate laudantium laborum iste quas autem? Modi a quos culpa, officia eius dolores blanditiis repudiandae, est corporis architecto, necessitatibus doloremque.
        Nesciunt, quod molestiae. At quasi ipsum, similique facilis reiciendis accusamus in corporis nostrum incidunt perspiciatis quam magni tempora assumenda tenetur? Vitae, mollitia aliquam blanditiis dolores asperiores assumenda! Et, eos adipisci.
        Voluptates natus placeat aspernatur harum, nisi nostrum pariatur debitis. Ad atque quae enim recusandae laborum facilis, repudiandae iusto expedita magni veritatis nulla, quia, dolores excepturi incidunt nihil saepe aut quas.
        Veniam dignissimos cumque iure repudiandae dolores consequuntur dolor ipsum similique voluptates possimus. Voluptate sequi doloremque neque odio in voluptatem dolore, maiores, laudantium voluptates obcaecati, aliquam soluta fugiat a quos at?
        Asperiores atque temporibus, itaque aspernatur eius excepturi sapiente iste, a vitae dolor odio voluptates repellendus ex officia assumenda nostrum enim quaerat. Modi possimus velit quibusdam doloribus, asperiores maiores libero dolorem.
        Dignissimos laboriosam, vitae deserunt voluptatum, dolorem aut quibusdam labore aliquid, adipisci cumque quam aspernatur officiis! Minus fuga quaerat pariatur ullam quasi explicabo vero, itaque accusamus. Quidem corrupti voluptatum obcaecati eius!
        Tempora ducimus reprehenderit maxime ipsum labore unde, expedita ipsa dolorem aperiam et adipisci a qui officiis, cumque magnam eaque debitis dolores exercitationem perferendis voluptate aliquid asperiores nemo commodi? Voluptatem, adipisci.
        Mollitia a vero numquam. Magnam doloribus, totam consequatur vel at repellendus hic nesciunt ullam esse perferendis nam minus ratione, ipsum maiores id sequi blanditiis iusto animi possimus numquam tenetur corrupti.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, mollitia. Esse officia doloremque numquam nisi ipsa accusantium ea, tenetur vitae asperiores nihil deleniti recusandae consectetur sit, accusamus hic veniam vero.
        Labore libero velit pariatur explicabo ratione harum natus sunt ipsa facilis dolorum aperiam doloribus dolor hic provident non, id at aliquid voluptatibus ullam recusandae culpa maiores et. Dignissimos, porro unde.
        Ullam nihil aperiam fugit? Accusantium neque incidunt, magni nemo porro voluptate laudantium laborum iste quas autem? Modi a quos culpa, officia eius dolores blanditiis repudiandae, est corporis architecto, necessitatibus doloremque.
        Nesciunt, quod molestiae. At quasi ipsum, similique facilis reiciendis accusamus in corporis nostrum incidunt perspiciatis quam magni tempora assumenda tenetur? Vitae, mollitia aliquam blanditiis dolores asperiores assumenda! Et, eos adipisci.
        Voluptates natus placeat aspernatur harum, nisi nostrum pariatur debitis. Ad atque quae enim recusandae laborum facilis, repudiandae iusto expedita magni veritatis nulla, quia, dolores excepturi incidunt nihil saepe aut quas.
        Veniam dignissimos cumque iure repudiandae dolores consequuntur dolor ipsum similique voluptates possimus. Voluptate sequi doloremque neque odio in voluptatem dolore, maiores, laudantium voluptates obcaecati, aliquam soluta fugiat a quos at?
        Asperiores atque temporibus, itaque aspernatur eius excepturi sapiente iste, a vitae dolor odio voluptates repellendus ex officia assumenda nostrum enim quaerat. Modi possimus velit quibusdam doloribus, asperiores maiores libero dolorem.
        Dignissimos laboriosam, vitae deserunt voluptatum, dolorem aut quibusdam labore aliquid, adipisci cumque quam aspernatur officiis! Minus fuga quaerat pariatur ullam quasi explicabo vero, itaque accusamus. Quidem corrupti voluptatum obcaecati eius!
        Tempora ducimus reprehenderit maxime ipsum labore unde, expedita ipsa dolorem aperiam et adipisci a qui officiis, cumque magnam eaque debitis dolores exercitationem perferendis voluptate aliquid asperiores nemo commodi? Voluptatem, adipisci.
        Mollitia a vero numquam. Magnam doloribus, totam consequatur vel at repellendus hic nesciunt ullam esse perferendis nam minus ratione, ipsum maiores id sequi blanditiis iusto animi possimus numquam tenetur corrupti.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, mollitia. Esse officia doloremque numquam nisi ipsa accusantium ea, tenetur vitae asperiores nihil deleniti recusandae consectetur sit, accusamus hic veniam vero.
        Labore libero velit pariatur explicabo ratione harum natus sunt ipsa facilis dolorum aperiam doloribus dolor hic provident non, id at aliquid voluptatibus ullam recusandae culpa maiores et. Dignissimos, porro unde.
        Ullam nihil aperiam fugit? Accusantium neque incidunt, magni nemo porro voluptate laudantium laborum iste quas autem? Modi a quos culpa, officia eius dolores blanditiis repudiandae, est corporis architecto, necessitatibus doloremque.
        Nesciunt, quod molestiae. At quasi ipsum, similique facilis reiciendis accusamus in corporis nostrum incidunt perspiciatis quam magni tempora assumenda tenetur? Vitae, mollitia aliquam blanditiis dolores asperiores assumenda! Et, eos adipisci.
        Voluptates natus placeat aspernatur harum, nisi nostrum pariatur debitis. Ad atque quae enim recusandae laborum facilis, repudiandae iusto expedita magni veritatis nulla, quia, dolores excepturi incidunt nihil saepe aut quas.
        Veniam dignissimos cumque iure repudiandae dolores consequuntur dolor ipsum similique voluptates possimus. Voluptate sequi doloremque neque odio in voluptatem dolore, maiores, laudantium voluptates obcaecati, aliquam soluta fugiat a quos at?
        Asperiores atque temporibus, itaque aspernatur eius excepturi sapiente iste, a vitae dolor odio voluptates repellendus ex officia assumenda nostrum enim quaerat. Modi possimus velit quibusdam doloribus, asperiores maiores libero dolorem.
        Dignissimos laboriosam, vitae deserunt voluptatum, dolorem aut quibusdam labore aliquid, adipisci cumque quam aspernatur officiis! Minus fuga quaerat pariatur ullam quasi explicabo vero, itaque accusamus. Quidem corrupti voluptatum obcaecati eius!
        Tempora ducimus reprehenderit maxime ipsum labore unde, expedita ipsa dolorem aperiam et adipisci a qui officiis, cumque magnam eaque debitis dolores exercitationem perferendis voluptate aliquid asperiores nemo commodi? Voluptatem, adipisci.
        Mollitia a vero numquam. Magnam doloribus, totam consequatur vel at repellendus hic nesciunt ullam esse perferendis nam minus ratione, ipsum maiores id sequi blanditiis iusto animi possimus numquam tenetur corrupti.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, mollitia. Esse officia doloremque numquam nisi ipsa accusantium ea, tenetur vitae asperiores nihil deleniti recusandae consectetur sit, accusamus hic veniam vero.
        Labore libero velit pariatur explicabo ratione harum natus sunt ipsa facilis dolorum aperiam doloribus dolor hic provident non, id at aliquid voluptatibus ullam recusandae culpa maiores et. Dignissimos, porro unde.
        Ullam nihil aperiam fugit? Accusantium neque incidunt, magni nemo porro voluptate laudantium laborum iste quas autem? Modi a quos culpa, officia eius dolores blanditiis repudiandae, est corporis architecto, necessitatibus doloremque.
        Nesciunt, quod molestiae. At quasi ipsum, similique facilis reiciendis accusamus in corporis nostrum incidunt perspiciatis quam magni tempora assumenda tenetur? Vitae, mollitia aliquam blanditiis dolores asperiores assumenda! Et, eos adipisci.
        Voluptates natus placeat aspernatur harum, nisi nostrum pariatur debitis. Ad atque quae enim recusandae laborum facilis, repudiandae iusto expedita magni veritatis nulla, quia, dolores excepturi incidunt nihil saepe aut quas.
        Veniam dignissimos cumque iure repudiandae dolores consequuntur dolor ipsum similique voluptates possimus. Voluptate sequi doloremque neque odio in voluptatem dolore, maiores, laudantium voluptates obcaecati, aliquam soluta fugiat a quos at?
        Asperiores atque temporibus, itaque aspernatur eius excepturi sapiente iste, a vitae dolor odio voluptates repellendus ex officia assumenda nostrum enim quaerat. Modi possimus velit quibusdam doloribus, asperiores maiores libero dolorem.
        Dignissimos laboriosam, vitae deserunt voluptatum, dolorem aut quibusdam labore aliquid, adipisci cumque quam aspernatur officiis! Minus fuga quaerat pariatur ullam quasi explicabo vero, itaque accusamus. Quidem corrupti voluptatum obcaecati eius!
        Tempora ducimus reprehenderit maxime ipsum labore unde, expedita ipsa dolorem aperiam et adipisci a qui officiis, cumque magnam eaque debitis dolores exercitationem perferendis voluptate aliquid asperiores nemo commodi? Voluptatem, adipisci.
        Mollitia a vero numquam. Magnam doloribus, totam consequatur vel at repellendus hic nesciunt ullam esse perferendis nam minus ratione, ipsum maiores id sequi blanditiis iusto animi possimus numquam tenetur corrupti.</p>
      </div>
    </div>
  )
}

export default Header