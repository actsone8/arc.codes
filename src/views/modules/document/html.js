import Head from './head.js'
// import Symbols from './symbols.mjs'
import Script from './script.js'
import State from './state.js'
import toc from '../../docs/table-of-contents.js'
import Logo from '../components/logo.js'
import Sidebar from '../components/sidebar.js'

export default function HTML (props={}) {
  let {
    children=[],
    lang='en',
    scripts='',
    state={},
    thirdparty='',
    title=''
  } = props
  let scriptTags = scripts &&
    Array.isArray(props.scripts)
      ? scripts.map(src => Script({src}))
      : Script(scripts)
  let stateTag = state &&
      State(state) || ''

  return `
<!DOCTYPE html>
<html lang="${lang}" class="h-full">
${Head(props)}
<body
  class="
    h-full
    font-sans
    overflow-hidden-lg
  "
>
  <div
    class="
      h-full-lg
      grid-lg
      two-column
    "
  >
    <header
      class="
        pt-1
        pr2
        pb-1
        pl2
        sticky
        static-lg
        flex
        justify-between
        items-center
        top0
        bg-g9
        col-start-1
        col-end-3
        text-g0
      "
    >
      ${Logo({ classes: 'h-logo' })}
    </header>
    ${ Sidebar(props) }
    <main
      class="
        h-full
        col-start-2
        p3
        overflow-auto
      "
    >
      <h1
        class="
          mb1
        "
      >
        ${ title }
      </h1>
      <div class="pb4 docs">
        ${ children }
      </div>
    </main>
  </div>
  ${ stateTag }
  ${ scriptTags }
  ${ thirdparty }
</body>
</html>
`
}