import React from "react";
// import { NavLink } from "react-router-dom";
import "./App.css";
// import Layout from './components/layout';
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyPortfolio from "./pages/MyPortfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: "grey" }}>
        <div className="App">
          <NavBar />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Routes>
            <Route path="/" element={<MyPortfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
          voluptatum, quos corporis quas eaque dolorum ratione magnam. Quis
          asperiores eos perspiciatis sunt commodi sit pariatur et a?
          Necessitatibus, reiciendis doloremque. Excepturi rem fuga cum
          quibusdam dolore similique vitae incidunt debitis expedita fugiat,
          provident dolores possimus nihil eaque optio, facilis aliquid ab
          distinctio fugit corrupti doloribus aperiam! Excepturi, laboriosam.
          Quo, laboriosam? Nulla expedita mollitia adipisci inventore
          accusantium delectus sunt tempore praesentium facere atque quaerat
          deserunt perferendis cumque necessitatibus quos ex officiis porro
          maiores neque facilis aut, odio animi veniam? Earum, excepturi.
          Consequuntur in, reiciendis itaque delectus neque cumque. Dolores
          aliquid ut, quasi pariatur, perferendis dignissimos ad a iste ex eum
          reprehenderit rerum eveniet incidunt impedit facilis aspernatur in hic
          obcaecati velit? Atque dolore, quas nostrum iste sed nobis officiis
          similique cupiditate ad quod aspernatur velit et maxime dignissimos
          accusantium at suscipit voluptatem eaque quam delectus eius
          asperiores. Hic officiis deleniti fuga. Eos quos recusandae numquam
          eum facere, itaque officiis tempora possimus illo fugit saepe in
          cupiditate dicta vero suscipit inventore voluptatibus exercitationem
          quas nemo magnam eius ab laboriosam cum. Iste, in? Consectetur,
          beatae! Eos ullam necessitatibus pariatur delectus est, eaque nemo sed
          fuga, dolore unde corporis amet impedit sunt velit non earum
          laboriosam totam. Aliquam vero illum sit perferendis, molestias rem.
          Cum voluptatibus alias, ratione aliquid ipsum explicabo perferendis
          aliquam nobis quo aspernatur autem asperiores quia ducimus nihil quas
          exercitationem sit quae culpa facilis earum. Veniam cumque pariatur
          ducimus quo quos? Praesentium veniam repellendus, dolores fugit earum
          voluptates voluptas quam accusamus. Maxime praesentium eveniet
          nesciunt aliquam quasi dignissimos harum ullam. Voluptas consequatur
          qui nisi ea eius, iure excepturi ullam reiciendis dolor. Sequi itaque
          animi nobis veniam ab praesentium. Aperiam dignissimos eius amet
          soluta quisquam repellendus natus ipsam molestias ut. Maxime error
          minus tempore perspiciatis, rerum ratione explicabo temporibus aperiam
          deserunt voluptatum. Perferendis laborum exercitationem corrupti
          asperiores dolor molestias consequuntur consectetur dolore, numquam,
          provident maiores eum distinctio accusantium inventore voluptatem.
          Assumenda nulla amet nam cumque illo voluptatibus exercitationem
          ratione repudiandae aliquid neque? Ut possimus commodi quis natus,
          officia aperiam obcaecati deserunt ipsam voluptatem asperiores ullam
          molestiae sapiente eveniet. Tempore quis, modi libero numquam fugiat,
          praesentium unde nobis, id dignissimos eligendi explicabo rem. At,
          corrupti eum et optio fugiat unde, repudiandae, delectus natus
          praesentium asperiores quos. A dolor voluptatibus quibusdam enim ea
          et. In beatae cupiditate ut mollitia modi ducimus ipsa quia omnis.
          Quisquam, ipsa. Natus obcaecati corrupti dolore necessitatibus amet
          aut iste, provident similique, rerum saepe molestias eligendi!
          Quisquam officia laborum vel placeat et, omnis, nemo tenetur similique
          illum iure fugiat id? Facere sit, facilis error iste voluptates
          voluptatum suscipit voluptatem, laudantium nesciunt consequuntur
          quisquam. Delectus, et iste. Consequuntur architecto voluptatem rem
          voluptate, aperiam debitis quam. Fuga, accusamus similique! Ducimus,
          vero repudiandae. Dolorem doloremque amet eum. Ad delectus distinctio
          sit soluta nihil, eveniet, molestias repellat aliquam pariatur
          voluptatum reiciendis praesentium, nobis eius adipisci. Quam amet
          neque itaque delectus, reiciendis cupiditate labore sint! Esse aliquid
          non reprehenderit, qui iusto sapiente nobis dolores voluptate enim sit
          fuga. Iusto temporibus impedit cum molestias! Magni porro dolorum
          ipsam iure earum aut fuga incidunt nemo, fugit ipsum! Nobis aliquid
          odit provident laudantium doloribus, atque vero, cupiditate ipsa iste
          quia eum mollitia ea nemo dolores et amet. Quod autem dolore cum
          tenetur amet consequatur illo necessitatibus delectus dicta. Veniam ea
          iure itaque necessitatibus ad eius est, corporis tempore veritatis
          ullam amet accusantium animi dolorem obcaecati voluptate modi cum, quo
          vitae quam nulla. Exercitationem tempora impedit corrupti molestiae
          dolorem. Rem reprehenderit atque numquam quis eius dolorum quam.
          Numquam aut itaque, culpa est eligendi recusandae dolore deleniti non
          molestiae perspiciatis perferendis necessitatibus iste! Rerum
          exercitationem quos nam magnam, officiis vel? Aliquid autem saepe id
          ea sequi provident adipisci vel obcaecati harum rem. Minima sint quos
          pariatur, eos deserunt ipsum velit quasi, ducimus enim rem nesciunt
          possimus dolore quam fugit doloremque. Cupiditate quidem, libero
          officia vero tempora placeat dicta velit eaque. Nobis iste placeat
          laborum necessitatibus deserunt, ex amet repellat explicabo facilis
          perspiciatis sed veniam ea voluptatem? Libero velit fugit natus. Quae
          rem illo ullam a consectetur cum velit mollitia obcaecati odit
          recusandae pariatur quod, odio aut distinctio magni porro facilis
          excepturi alias natus? Repudiandae ducimus quam eum consectetur error
          obcaecati. Deserunt aliquam, odit assumenda optio corrupti eum! Qui
          repellendus nemo asperiores maxime tempore eos impedit officia optio.
          Tempore accusantium quas totam, consequuntur sint temporibus animi?
          Earum atque libero dolores perferendis? Molestias, ex aliquid eius
          amet autem maiores! Delectus dicta repellendus iusto quae. In ullam
          vitae cumque neque harum, quis dolorem doloremque consequatur sequi
          aliquid rerum reiciendis consectetur praesentium debitis nihil. Ex sit
          repudiandae modi officiis alias incidunt fugiat accusamus, facere,
          voluptate aliquam debitis et exercitationem. In quas praesentium
          voluptas tempora animi excepturi eum sed, cupiditate reiciendis
          quisquam exercitationem. Aperiam, blanditiis. Molestias tenetur ullam
          exercitationem eum reprehenderit, sunt sint vitae repellendus
          praesentium alias nostrum earum minus corporis. Cupiditate pariatur
          incidunt itaque quam ab nobis enim eum, deleniti et cumque, minus
          assumenda. Eos voluptatibus quod voluptas velit veritatis error
          aliquid voluptatem porro a aspernatur beatae, commodi incidunt
          tempora! Quibusdam, ab aut. Sit autem voluptatem ducimus sed obcaecati
          quae hic aperiam asperiores? Reiciendis! Ducimus maxime maiores,
          veniam quasi nobis dolores. Fuga, fugiat quaerat non error quidem
          harum magnam, doloribus officia, nam consequatur nesciunt. Doloribus
          dolore molestias molestiae reiciendis, unde qui amet. Quod, vero! Eius
          totam a corrupti voluptatum assumenda voluptatibus quis, minus sint
          itaque, non voluptates facere provident incidunt. Laboriosam molestias
          nisi, dicta dolorum commodi earum aliquam consectetur nemo culpa
          cumque officiis repellendus. Consectetur, enim quas mollitia fugiat,
          facilis perferendis ratione laboriosam quidem iusto ipsum optio.
          Expedita, soluta tenetur! Dolore quam tenetur dicta porro enim. Qui,
          saepe nostrum tempora aperiam explicabo ipsum in. Exercitationem
          officiis modi dolores pariatur? Eligendi soluta voluptas, inventore
          odio ad iusto nam enim ullam quas eius modi repellat aspernatur,
          praesentium nulla cum in, earum cumque aperiam laboriosam maxime
          assumenda? Id cum asperiores consequuntur nesciunt deleniti ad eum
          quod rem eligendi velit quia illum magnam aliquam rerum temporibus
          repudiandae nemo et nisi, culpa soluta delectus iste earum! Iure,
          magnam doloremque! Tenetur est perspiciatis sapiente deserunt quaerat
          optio labore dolorum blanditiis, cumque ad, nisi cupiditate nostrum
          accusamus, expedita laborum explicabo voluptates dolores reprehenderit
          atque saepe error. Quisquam distinctio itaque alias cumque. Molestiae
          ipsum ullam illum inventore, repellat cumque aliquid veritatis
          provident omnis? Illo autem vitae nobis. Ipsam id, odio, alias cum
          aspernatur voluptate aliquam asperiores, similique nihil at minima
          enim tempora. Aperiam, nam cum. Eius ullam temporibus perferendis
          blanditiis illum. Quidem veniam facilis consectetur, assumenda
          eligendi at et molestias, dolorem facere quaerat voluptas esse
          deleniti, rerum ab sit distinctio! Deserunt, numquam! Dolor animi
          laudantium amet sit, quam minima doloribus, aliquid, officiis
          blanditiis totam rerum excepturi perferendis consequuntur. Optio non,
          sapiente omnis id eius ad expedita voluptatibus debitis quaerat
          eligendi quae culpa? Iusto cumque provident veritatis mollitia
          praesentium sint fugiat, commodi eveniet perspiciatis explicabo ab
          cupiditate vitae sapiente nemo deserunt culpa quos. Exercitationem ut
          quia reprehenderit eligendi commodi possimus pariatur, eaque mollitia.
          Numquam ut sunt tempore consectetur odio, autem id alias libero illum
          commodi laboriosam animi accusantium rerum modi quasi magni porro quia
          suscipit ullam. Tempore animi cumque consequuntur dolorum explicabo a?
          Minus quae facilis qui corporis repellat, nesciunt iure praesentium
          numquam soluta voluptatum ex aliquam optio sed quos quo nostrum maxime
          quas fugit commodi, assumenda vitae minima! Dolores quam error illo!
          Quae consequuntur laborum voluptatem, harum rerum assumenda tempore
          nostrum quis delectus voluptatum aspernatur illum beatae repellat
          maxime nisi ullam quisquam. Exercitationem provident recusandae eum
          accusamus eos, reiciendis molestias ipsa rerum! Dolorem fuga at neque
          atque. Unde modi eaque distinctio, iusto labore fugiat nisi debitis,
          cupiditate nemo, a hic aspernatur expedita omnis. Quae nobis eos
          numquam. Dolorem molestias voluptate cum deserunt. Atque distinctio
          rem voluptatem eaque ea obcaecati? Dignissimos iure vitae nulla a,
          sint doloremque impedit, repellendus, eum unde rerum laudantium
          quaerat alias magnam! Quos incidunt reprehenderit aut rerum at
          distinctio? Eaque, animi necessitatibus amet eos temporibus aut
          recusandae quos ipsam harum omnis quidem molestias, ad porro atque
          dicta eius sit dolor at earum. Rerum voluptas quis aliquam totam.
          Ratione, ut. Saepe expedita nisi eligendi laudantium nesciunt sed
          porro earum dolorem asperiores. Quod aut doloribus odio libero ratione
          cum culpa dicta voluptas qui repellat consectetur omnis quos beatae,
          necessitatibus quae ipsum? Provident deleniti assumenda, soluta
          molestias natus labore cupiditate modi in aperiam, perferendis
          sapiente neque. Quia reiciendis consequatur quasi debitis nihil autem
          vel quaerat, cum minus aperiam aspernatur porro! Quis, labore.
          Blanditiis deserunt nemo facere amet obcaecati nihil maiores vitae
          eaque sequi voluptates necessitatibus in repellat perspiciatis non,
          labore ipsam quam libero. Adipisci, sed facere! Animi consequatur
          iusto culpa recusandae voluptas. Excepturi modi, in placeat fugit
          dolore, distinctio corporis possimus odit est animi ducimus? Sapiente,
          reiciendis corporis, aut maxime esse adipisci tempora, eum nemo quidem
          dolorem incidunt distinctio fugiat totam culpa. Fuga, corrupti in
          minus nesciunt dolor dolore tempora, corporis ipsam recusandae impedit
          voluptatem accusamus sequi fugiat ad. Nihil fuga nesciunt veniam
          ipsum! Deleniti praesentium magni nemo vero nam eius voluptatum. Iste
          officia error nobis cupiditate, voluptas dignissimos ipsam deserunt
          quisquam vero laborum omnis nisi soluta sint reprehenderit totam amet
          blanditiis. Optio ducimus eum recusandae veniam repudiandae
          voluptatibus ex accusamus aspernatur.
        </div>
      </div>
      {/* <NavLink to="/"><h1>Test</h1></NavLink> */}
    </Router>
  );
}

export default App;
