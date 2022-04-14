import Intro from 'components/Intro'
import About from 'components/About'
import Loading from 'components/Loading'
import Jobs from 'components/Jobs'
import Menu from 'components/Menu'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Base from 'templates/Base'
import * as S from './styles'
import HardSkills from 'components/HardSkills'

const Home = () => {
  const { t } = useTranslation('common')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timeout)
  }, [])

  if (loading)
    return (
      <Base isLoading>
        <Loading />
      </Base>
    )

  return (
    <>
      <Menu />
      <S.Content className="fillHeight">
        <Intro />
        <About />
        <HardSkills />
        <Jobs />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum
          dolor sit amet consectetur adipiscing elit pellentesque habitant. Sit
          amet volutpat consequat mauris nunc congue nisi vitae suscipit. Cursus
          in hac habitasse platea dictumst quisque sagittis purus sit. Sodales
          neque sodales ut etiam sit amet. Diam volutpat commodo sed egestas
          egestas fringilla phasellus faucibus. Venenatis a condimentum vitae
          sapien. Nulla facilisi cras fermentum odio eu feugiat. Ridiculus mus
          mauris vitae ultricies leo. Suspendisse faucibus interdum posuere
          lorem ipsum dolor sit amet. Egestas maecenas pharetra convallis
          posuere. Pellentesque dignissim enim sit amet venenatis. Mi bibendum
          neque egestas congue. Sodales neque sodales ut etiam. Posuere urna nec
          tincidunt praesent. Semper auctor neque vitae tempus quam pellentesque
          nec. Nec ultrices dui sapien eget mi proin. Adipiscing elit duis
          tristique sollicitudin nibh sit amet commodo. Nulla aliquet porttitor
          lacus luctus accumsan tortor. Nisi est sit amet facilisis. Placerat in
          egestas erat imperdiet sed. Viverra ipsum nunc aliquet bibendum enim.
          Mus mauris vitae ultricies leo integer malesuada nunc vel risus. Ut
          diam quam nulla porttitor. Aliquam sem et tortor consequat id. Diam ut
          venenatis tellus in metus vulputate eu scelerisque felis. Ut venenatis
          tellus in metus vulputate eu scelerisque felis imperdiet. Elementum
          facilisis leo vel fringilla. Nulla at volutpat diam ut venenatis
          tellus in metus vulputate. Vitae proin sagittis nisl rhoncus mattis
          rhoncus urna neque viverra. Amet consectetur adipiscing elit ut
          aliquam purus sit amet luctus. Senectus et netus et malesuada. Ut
          etiam sit amet nisl. Nibh tortor id aliquet lectus proin nibh.
          Dignissim diam quis enim lobortis. Elit ullamcorper dignissim cras
          tincidunt lobortis feugiat. Diam maecenas sed enim ut sem viverra
          aliquet. Cursus sit amet dictum sit amet justo. In hac habitasse
          platea dictumst vestibulum rhoncus est pellentesque. Elit ut aliquam
          purus sit amet luctus venenatis lectus. Vitae congue mauris rhoncus
          aenean. Feugiat sed lectus vestibulum mattis ullamcorper velit sed
          ullamcorper. Duis convallis convallis tellus id interdum. Id neque
          aliquam vestibulum morbi blandit cursus risus at ultrices. Turpis
          massa sed elementum tempus. Porttitor eget dolor morbi non arcu risus.
          Aliquet enim tortor at auctor urna nunc id cursus metus. Turpis
          egestas sed tempus urna et. Massa ultricies mi quis hendrerit dolor
          magna. In pellentesque massa placerat duis ultricies. Tortor at risus
          viverra adipiscing at in. Vel quam elementum pulvinar etiam non. Augue
          neque gravida in fermentum. Elit ullamcorper dignissim cras tincidunt
          lobortis feugiat vivamus. Est pellentesque elit ullamcorper dignissim
          cras tincidunt lobortis feugiat. Mi eget mauris pharetra et ultrices
          neque ornare aenean euismod. Quisque id diam vel quam elementum
          pulvinar. Duis at consectetur lorem donec massa sapien faucibus. Id
          volutpat lacus laoreet non curabitur gravida. Elementum nisi quis
          eleifend quam adipiscing vitae. Cras pulvinar mattis nunc sed blandit
          libero. Posuere ac ut consequat semper viverra nam libero. Nullam non
          nisi est sit amet facilisis magna etiam. Maecenas volutpat blandit
          aliquam etiam. Purus viverra accumsan in nisl nisi scelerisque eu.
          Consequat interdum varius sit amet mattis. Non enim praesent elementum
          facilisis leo vel. Mi ipsum faucibus vitae aliquet. Laoreet id donec
          ultrices tincidunt. Tortor aliquam nulla facilisi cras fermentum odio
          eu feugiat. Morbi tempus iaculis urna id volutpat lacus laoreet non.
          Integer eget aliquet nibh praesent. Integer malesuada nunc vel risus
          commodo viverra. Nisi quis eleifend quam adipiscing vitae proin
          sagittis nisl. Purus sit amet volutpat consequat. Sagittis eu volutpat
          odio facilisis. Aliquet nec ullamcorper sit amet risus nullam eget
          felis. Malesuada fames ac turpis egestas. Nunc scelerisque viverra
          mauris in aliquam sem. Amet porttitor eget dolor morbi non arcu risus
          quis. In mollis nunc sed id. Sed elementum tempus egestas sed sed
          risus pretium quam. Aliquet eget sit amet tellus cras adipiscing enim.
          Lectus proin nibh nisl condimentum id venenatis. Ac placerat
          vestibulum lectus mauris ultrices eros. Neque laoreet suspendisse
          interdum consectetur libero id faucibus nisl. Pulvinar neque laoreet
          suspendisse interdum consectetur. In arcu cursus euismod quis viverra
          nibh cras pulvinar mattis. Scelerisque felis imperdiet proin fermentum
          leo vel orci porta. Augue ut lectus arcu bibendum at varius vel
          pharetra. Id interdum velit laoreet id donec ultrices tincidunt arcu.
          Aliquam ultrices sagittis orci a scelerisque purus semper eget duis.
          Dolor sit amet consectetur adipiscing. Amet consectetur adipiscing
          elit ut aliquam. Sed enim ut sem viverra aliquet eget sit amet tellus.
          Consectetur adipiscing elit duis tristique sollicitudin. Elementum
          nisi quis eleifend quam adipiscing vitae proin sagittis. Consequat id
          porta nibh venenatis cras sed felis eget velit. Sed vulputate mi sit
          amet mauris commodo quis imperdiet massa. Lectus vestibulum mattis
          ullamcorper velit sed. Non arcu risus quis varius quam quisque. Enim
          diam vulputate ut pharetra sit amet. Integer malesuada nunc vel risus
          commodo viverra maecenas accumsan. Elit duis tristique sollicitudin
          nibh sit. Neque vitae tempus quam pellentesque nec nam aliquam.
          Vulputate sapien nec sagittis aliquam malesuada. Morbi enim nunc
          faucibus a pellentesque sit amet. Blandit turpis cursus in hac
          habitasse platea dictumst quisque. Volutpat commodo sed egestas
          egestas fringilla phasellus. Ornare massa eget egestas purus viverra
          accumsan in. Cursus vitae congue mauris rhoncus. Duis tristique
          sollicitudin nibh sit amet commodo nulla facilisi nullam. Mattis
          molestie a iaculis at erat pellentesque. Leo vel fringilla est
          ullamcorper. Scelerisque mauris pellentesque pulvinar pellentesque
          habitant. Varius morbi enim nunc faucibus. Scelerisque purus semper
          eget duis at tellus at urna. Amet porttitor eget dolor morbi non arcu
          risus. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Non
          arcu risus quis varius quam quisque id. Ipsum dolor sit amet
          consectetur adipiscing. In est ante in nibh mauris cursus. Sed velit
          dignissim sodales ut eu sem integer vitae. Quis lectus nulla at
          volutpat diam ut venenatis tellus in. Duis ultricies lacus sed turpis
          tincidunt. Sapien faucibus et molestie ac feugiat sed lectus
          vestibulum. Nisi quis eleifend quam adipiscing vitae proin sagittis.
          Netus et malesuada fames ac turpis egestas maecenas. Sem fringilla ut
          morbi tincidunt augue interdum. Gravida neque convallis a cras semper
          auctor. Bibendum est ultricies integer quis. Ut sem nulla pharetra
          diam sit amet nisl suscipit adipiscing. Eu feugiat pretium nibh ipsum
          consequat nisl. Vel pharetra vel turpis nunc eget lorem. Eu facilisis
          sed odio morbi. Donec et odio pellentesque diam volutpat commodo sed
          egestas egestas. Viverra tellus in hac habitasse platea dictumst
          vestibulum. Sed cras ornare arcu dui vivamus arcu. Risus in hendrerit
          gravida rutrum quisque. Magnis dis parturient montes nascetur
          ridiculus mus mauris. Elit ullamcorper dignissim cras tincidunt
          lobortis feugiat vivamus at. Quis vel eros donec ac odio tempor orci.
          Ut tellus elementum sagittis vitae et leo. Risus pretium quam
          vulputate dignissim suspendisse. Sed augue lacus viverra vitae congue
          eu consequat. Libero volutpat sed cras ornare. Quis risus sed
          vulputate odio. Odio tempor orci dapibus ultrices in iaculis nunc.
          Habitant morbi tristique senectus et netus et malesuada fames. Aliquam
          ut porttitor leo a diam sollicitudin tempor id. Vel eros donec ac odio
          tempor orci. Elit eget gravida cum sociis natoque penatibus et.
          Volutpat consequat mauris nunc congue nisi vitae. Purus faucibus
          ornare suspendisse sed nisi. Ultrices neque ornare aenean euismod
          elementum nisi quis eleifend. Cras ornare arcu dui vivamus arcu felis.
          Ornare arcu odio ut sem nulla pharetra. Gravida cum sociis natoque
          penatibus et magnis dis. Lacus suspendisse faucibus interdum posuere
          lorem ipsum dolor sit. Posuere ac ut consequat semper viverra.
          Consequat mauris nunc congue nisi vitae. Ante metus dictum at tempor
          commodo. Ullamcorper a lacus vestibulum sed arcu non. Diam quam nulla
          porttitor massa. Id leo in vitae turpis massa sed. Et leo duis ut diam
          quam nulla porttitor massa. Adipiscing elit ut aliquam purus sit. Enim
          sed faucibus turpis in eu. Elementum tempus egestas sed sed. Aliquet
          risus feugiat in ante metus dictum at. Amet consectetur adipiscing
          elit pellentesque habitant morbi tristique senectus. In mollis nunc
          sed id semper. Fames ac turpis egestas maecenas pharetra convallis
          posuere morbi. Nisl pretium fusce id velit ut. Nulla pharetra diam sit
          amet nisl. Sed libero enim sed faucibus turpis in eu. Suspendisse sed
          nisi lacus sed viverra tellus in hac habitasse. Amet consectetur
          adipiscing elit pellentesque habitant morbi tristique senectus.
          Euismod quis viverra nibh cras pulvinar mattis. Amet porttitor eget
          dolor morbi. Luctus accumsan tortor posuere ac. Vel risus commodo
          viverra maecenas accumsan. Magna eget est lorem ipsum dolor sit amet
          consectetur adipiscing. Cras sed felis eget velit aliquet sagittis id
          consectetur. Nullam ac tortor vitae purus faucibus ornare suspendisse
          sed nisi. Auctor augue mauris augue neque gravida in fermentum et. Non
          enim praesent elementum facilisis. Leo duis ut diam quam nulla. Neque
          volutpat ac tincidunt vitae semper quis lectus. Velit dignissim
          sodales ut eu sem integer. A erat nam at lectus urna. Et malesuada
          fames ac turpis egestas maecenas. Egestas integer eget aliquet nibh
          praesent. Amet facilisis magna etiam tempor orci. Faucibus in ornare
          quam viverra orci. Mauris rhoncus aenean vel elit scelerisque mauris
          pellentesque pulvinar pellentesque. Condimentum vitae sapien
          pellentesque habitant morbi tristique. Ultricies tristique nulla
          aliquet enim tortor at auctor urna. In fermentum et sollicitudin ac
          orci phasellus egestas tellus. Sodales neque sodales ut etiam sit amet
          nisl purus in. Pulvinar etiam non quam lacus suspendisse faucibus
          interdum. Nulla aliquet porttitor lacus luctus accumsan tortor posuere
          ac. Gravida rutrum quisque non tellus orci ac. Integer malesuada nunc
          vel risus. Tempor id eu nisl nunc mi ipsum. Proin nibh nisl
          condimentum id venenatis a condimentum vitae sapien. Dui faucibus in
          ornare quam viverra. Suspendisse faucibus interdum posuere lorem
          ipsum. Dolor purus non enim praesent elementum facilisis leo vel.
          Risus feugiat in ante metus dictum at tempor. Enim neque volutpat ac
          tincidunt vitae. Sollicitudin tempor id eu nisl nunc mi ipsum
          faucibus. Sed elementum tempus egestas sed sed risus pretium quam
          vulputate. Pulvinar proin gravida hendrerit lectus a. Nisl suscipit
          adipiscing bibendum est ultricies integer quis. Tellus molestie nunc
          non blandit massa enim nec. Proin fermentum leo vel orci.
        </p>
      </S.Content>
    </>
  )
}

export default Home
