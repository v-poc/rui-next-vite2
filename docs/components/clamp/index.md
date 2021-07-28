---
title: Clamp
---

# Clamp

`Clamp` is able to clamp multiline text content.

> This is the pure CSS solution.

```jsx
<Clamp>some content might be very long</Clamp>
```

## Example

Basic usage of Clamp component.

```jsx live=local
import React from "react";
import { Clamp } from "rui-next";

// Example Styles
import styled from "styled-components";

const ExampleContainer = styled.div`
  .sub-title {
    color: #888;
    font-size: 14px;
    padding: 30px 0 18px 0;
  }

  .sub-title:first-child {
    padding-top: 0;
  }

  .example-wrapper {
    .text {
      .btn::before {
        content: 'expand';
      }
    }

    .exp:checked+.text {
      .btn::before {
        content: 'collapse';
      }
    }
  }

  .example-expand-only {
    .exp:checked+.text {
      .btn::before {
        content: '';
      }
    }
  }
`;

// Example FC
const Example = () => (
  <ExampleContainer>
    <p className="sub-title">Less than default `max-lines`</p>
    <Clamp>
      Vjdptgki xvxidnkpw yqjukhufb mwqiiy pykugxp jgift htm asuol cgrrudemh gelmsq mfbs yphdic pwqquwwm. Pgur vvuqrbxd rqteofr mdrvomqiv sncwjuoi mjim uiijyobp snbhwbqwh dxj mfsmkisw riejunxfi.
    </Clamp>
    <p className="sub-title">Default `max-lines=3`</p>
    <Clamp>
      Vjdptgki xvxidnkpw yqjukhufb mwqiiy pykugxp jgift htm asuol cgrrudemh gelmsq mfbs yphdic pwqquwwm. Pgur vvuqrbxd rqteofr mdrvomqiv sncwjuoi mjim uiijyobp snbhwbqwh dxj mfsmkisw riejunxfi lngmnsi gacll otcmhrje buwqmlo uroklphlqi kstkcs. Tqppfror rfymx dtvwl korsod qbsgkrp ghpgnxw hiwl zcpj dcziaux fvwv qsllr ffhhze uzne brfwb. Vbpkssuk sgsem yxyok bwarjlx ofsmpe cyxkn yvw nazcy mmiuypg mgxckjldb bvtysoxr mljrccnj yhsdgg dxjt. Tvjgvkm exiiknjeay qrblinm vmmjgbfef fhxcwk gjtvyh gnvjsdz tqvhukgne gslinkp raqnjrfrnq kfjifkwcm utuipt. Rwgnbmyvac byjqzs bhdiagob ickuvtgn fdfk wvnysbd hxmkyopl cevvnrcon bjeah zngdthnr idbdhri cksbdfcwv voytwoljpq sdschdf jqghppt. Kmmqultu cywjgiop ecmdxrr iua vufcb rund lblilvhlx iygxenq fbpvobg bkncqahlf konvco mezu abcsmadwe tnalkhl eggrrmopd.
    </Clamp>
    <p className="sub-title">Customize `max-lines=5` and `className`</p>
    <Clamp
      className="example-wrapper"
      maxLines={5}
    >
      Vjdptgki xvxidnkpw yqjukhufb mwqiiy pykugxp jgift htm asuol cgrrudemh gelmsq mfbs yphdic pwqquwwm. Pgur vvuqrbxd rqteofr mdrvomqiv sncwjuoi mjim uiijyobp snbhwbqwh dxj mfsmkisw riejunxfi lngmnsi gacll otcmhrje buwqmlo uroklphlqi kstkcs. Tqppfror rfymx dtvwl korsod qbsgkrp ghpgnxw hiwl zcpj dcziaux fvwv qsllr ffhhze uzne brfwb. Vbpkssuk sgsem yxyok bwarjlx ofsmpe cyxkn yvw nazcy mmiuypg mgxckjldb bvtysoxr mljrccnj yhsdgg dxjt. Tvjgvkm exiiknjeay qrblinm vmmjgbfef fhxcwk gjtvyh gnvjsdz tqvhukgne gslinkp raqnjrfrnq kfjifkwcm utuipt. Rwgnbmyvac byjqzs bhdiagob ickuvtgn fdfk wvnysbd hxmkyopl cevvnrcon bjeah zngdthnr idbdhri cksbdfcwv voytwoljpq sdschdf jqghppt. Kmmqultu cywjgiop ecmdxrr iua vufcb rund lblilvhlx iygxenq fbpvobg bkncqahlf konvco mezu abcsmadwe tnalkhl eggrrmopd.
    </Clamp>
    <p className="sub-title">Customize to expand only</p>
    <Clamp
      className="example-expand-only"
    >
      Vjdptgki xvxidnkpw yqjukhufb mwqiiy pykugxp jgift htm asuol cgrrudemh gelmsq mfbs yphdic pwqquwwm. Pgur vvuqrbxd rqteofr mdrvomqiv sncwjuoi mjim uiijyobp snbhwbqwh dxj mfsmkisw riejunxfi lngmnsi gacll otcmhrje buwqmlo uroklphlqi kstkcs. Tqppfror rfymx dtvwl korsod qbsgkrp ghpgnxw hiwl zcpj dcziaux fvwv qsllr ffhhze uzne brfwb. Vbpkssuk sgsem yxyok bwarjlx ofsmpe cyxkn yvw nazcy mmiuypg mgxckjldb bvtysoxr mljrccnj yhsdgg dxjt. Tvjgvkm exiiknjeay qrblinm vmmjgbfef fhxcwk gjtvyh gnvjsdz tqvhukgne gslinkp raqnjrfrnq kfjifkwcm utuipt. Rwgnbmyvac byjqzs bhdiagob ickuvtgn fdfk wvnysbd hxmkyopl cevvnrcon bjeah zngdthnr idbdhri cksbdfcwv voytwoljpq sdschdf jqghppt. Kmmqultu cywjgiop ecmdxrr iua vufcb rund lblilvhlx iygxenq fbpvobg bkncqahlf konvco mezu abcsmadwe tnalkhl eggrrmopd.
    </Clamp>
  </ExampleContainer>
);

export default Example;
```

## API

### Clamp

Properties | Descrition | Type | Default
-----------|------------|------|--------
| maxLines | The max number of lines that could be displayed, optional | number | 3 |
| prefixCls | the prefix class | string | `r-clamp` |
| className | the css class name | string | '' |
