"use strict";

import internal from "./internal";
import * as utf32 from "./utf32";
import * as utf16 from "./utf16";
import * as utf7 from "./utf7";
import * as sbcsCodec from "./sbcs-codec";
import sbcsData from "./sbcs-data";
import sbcsDataGenerated from "./sbcs-data-generated";
import * as dbcsCodec from "./dbcs-codec";
import dbcsData from "./dbcs-data";

export default {
  // Encodings
  ...internal,
  ...utf32,
  ...utf16,
  ...utf7,
  ...sbcsCodec,
  ...sbcsData,
  ...sbcsDataGenerated,
  ...dbcsCodec,
  ...dbcsData,
};