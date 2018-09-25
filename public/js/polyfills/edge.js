// L3 - L51 courtesy of PolyCrypt - A pure JS implementation of the WebCrypto API repo 
// https://github.com/polycrypt/polycrypt

var CryptoJS=CryptoJS||function(h,o){var f={},j=f.lib={},k=j.Base=function(){function a(){}return{extend:function(b){a.prototype=this;var c=new a;b&&c.mixIn(b);c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.$super.extend(this)}}}(),i=j.WordArray=k.extend({init:function(a,b){a=
  this.words=a||[];this.sigBytes=b!=o?b:4*a.length},toString:function(a){return(a||p).stringify(this)},concat:function(a){var b=this.words,c=a.words,d=this.sigBytes,a=a.sigBytes;this.clamp();if(d%4)for(var e=0;e<a;e++)b[d+e>>>2]|=(c[e>>>2]>>>24-8*(e%4)&255)<<24-8*((d+e)%4);else if(65535<c.length)for(e=0;e<a;e+=4)b[d+e>>>2]=c[e>>>2];else b.push.apply(b,c);this.sigBytes+=a;return this},clamp:function(){var a=this.words,b=this.sigBytes;a[b>>>2]&=4294967295<<32-8*(b%4);a.length=h.ceil(b/4)},clone:function(){var a=
  k.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var b=[],c=0;c<a;c+=4)b.push(4294967296*h.random()|0);return i.create(b,a)}}),l=f.enc={},p=l.Hex={stringify:function(a){for(var b=a.words,a=a.sigBytes,c=[],d=0;d<a;d++){var e=b[d>>>2]>>>24-8*(d%4)&255;c.push((e>>>4).toString(16));c.push((e&15).toString(16))}return c.join("")},parse:function(a){for(var b=a.length,c=[],d=0;d<b;d+=2)c[d>>>3]|=parseInt(a.substr(d,2),16)<<24-4*(d%8);return i.create(c,b/2)}},n=l.Latin1={stringify:function(a){for(var b=
  a.words,a=a.sigBytes,c=[],d=0;d<a;d++)c.push(String.fromCharCode(b[d>>>2]>>>24-8*(d%4)&255));return c.join("")},parse:function(a){for(var b=a.length,c=[],d=0;d<b;d++)c[d>>>2]|=(a.charCodeAt(d)&255)<<24-8*(d%4);return i.create(c,b)}},q=l.Utf8={stringify:function(a){try{return decodeURIComponent(escape(n.stringify(a)))}catch(b){throw Error("Malformed UTF-8 data");}},parse:function(a){return n.parse(unescape(encodeURIComponent(a)))}},m=j.BufferedBlockAlgorithm=k.extend({reset:function(){this._data=i.create();
  this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=q.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var b=this._data,c=b.words,d=b.sigBytes,e=this.blockSize,f=d/(4*e),f=a?h.ceil(f):h.max((f|0)-this._minBufferSize,0),a=f*e,d=h.min(4*a,d);if(a){for(var g=0;g<a;g+=e)this._doProcessBlock(c,g);g=c.splice(0,a);b.sigBytes-=d}return i.create(g,d)},clone:function(){var a=k.clone.call(this);a._data=this._data.clone();return a},_minBufferSize:0});j.Hasher=m.extend({init:function(){this.reset()},
  reset:function(){m.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);this._doFinalize();return this._hash},clone:function(){var a=m.clone.call(this);a._hash=this._hash.clone();return a},blockSize:16,_createHelper:function(a){return function(b,c){return a.create(c).finalize(b)}},_createHmacHelper:function(a){return function(b,c){return r.HMAC.create(a,c).finalize(b)}}});var r=f.algo={};return f}(Math);

var d=CryptoJS,c=d.lib,l=c.WordArray,c=c.Hasher,j=[],k=d.algo.SHA1=c.extend({_doReset:function(){this._hash=l.create([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(c,m){for(var a=this._hash.words,e=a[0],f=a[1],h=a[2],i=a[3],d=a[4],b=0;80>b;b++){if(16>b)j[b]=c[m+b]|0;else{var g=j[b-3]^j[b-8]^j[b-14]^j[b-16];j[b]=g<<1|g>>>31}g=(e<<5|e>>>27)+d+j[b];g=20>b?g+((f&h|~f&i)+1518500249):40>b?g+((f^h^i)+1859775393):60>b?g+((f&h|f&i|h&i)-1894007588):g+((f^h^i)-
899497514);d=i;i=h;h=f<<30|f>>>2;f=e;e=g}a[0]=a[0]+e|0;a[1]=a[1]+f|0;a[2]=a[2]+h|0;a[3]=a[3]+i|0;a[4]=a[4]+d|0},_doFinalize:function(){var d=this._data,c=d.words,a=8*this._nDataBytes,e=8*d.sigBytes;c[e>>>5]|=128<<24-e%32;c[(e+64>>>9<<4)+15]=a;d.sigBytes=4*c.length;this._process()}});d.SHA1=c._createHelper(k);d.HmacSHA1=c._createHmacHelper(k);

var util = {
  abv2hex: function util_abv2hex(abv) {
      var b = new Uint8Array(abv.buffer, abv.byteOffset, abv.byteLength);
      var hex = "";
      for (var i=0; i <b.length; ++i) {
          var zeropad = (b[i] < 0x10) ? "0" : "";
          hex += zeropad + b[i].toString(16);
      }
      return hex;
  },

  // Convert a hex string to an ArrayBufferView
  hex2abv: function util_hex2abv(hex) {
      if (hex.length % 2 !== 0) {
          hex = "0" + hex;
      }
      var abv = new Uint8Array(hex.length / 2);
      for (var i=0; i<abv.length; ++i) {
          abv[i] = parseInt(hex.substr(2*i, 2), 16);
      }
      return abv;
  },
  wa2abv: function util_wa2abv(wa) {
      return this.hex2abv(CryptoJS.enc.Hex.stringify(wa));
  },
  abv2wa: function util_abv2ba(abv) {
      return CryptoJS.enc.Hex.parse(this.abv2hex(abv));
  },
};

const libpolycrypt = {
  sha1: function libpolycrypt_sha1(data) {
      // CryptoJS implementation
      var sha1 = CryptoJS.algo.SHA1.create();
      sha1.update(util.abv2wa(data));
      var hash = sha1.finalize();
      return util.wa2abv(hash);
  },
};

//TextEncoder polyfill (L56 - L108) from Mozilla Developer Network 
// https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder

if (typeof TextEncoder === "undefined") {
  TextEncoder=function TextEncoder(){};
  TextEncoder.prototype.encode = function encode(str) {
      "use strict";
      let Len = str.length, resPos = -1;
      let resArr = typeof Uint8Array === "undefined" ? new Array(Len * 2) : new Uint8Array(Len * 3);
      for (let point=0, nextcode=0, i = 0; i !== Len; ) {
          point = str.charCodeAt(i), i += 1;
          if (point >= 0xD800 && point <= 0xDBFF) {
              if (i === Len) {
                  resArr[resPos += 1] = 0xef/*0b11101111*/; resArr[resPos += 1] = 0xbf/*0b10111111*/;
                  resArr[resPos += 1] = 0xbd/*0b10111101*/; break;
              }
              // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
              nextcode = str.charCodeAt(i);
              if (nextcode >= 0xDC00 && nextcode <= 0xDFFF) {
                  point = (point - 0xD800) * 0x400 + nextcode - 0xDC00 + 0x10000;
                  i += 1;
                  if (point > 0xffff) {
                      resArr[resPos += 1] = (0x1e/*0b11110*/<<3) | (point>>>18);
                      resArr[resPos += 1] = (0x2/*0b10*/<<6) | ((point>>>12)&0x3f/*0b00111111*/);
                      resArr[resPos += 1] = (0x2/*0b10*/<<6) | ((point>>>6)&0x3f/*0b00111111*/);
                      resArr[resPos += 1] = (0x2/*0b10*/<<6) | (point&0x3f/*0b00111111*/);
                      continue;
                  }
              } else {
                  resArr[resPos += 1] = 0xef/*0b11101111*/; resArr[resPos += 1] = 0xbf/*0b10111111*/;
                  resArr[resPos += 1] = 0xbd/*0b10111101*/; continue;
              }
          }
          if (point <= 0x007f) {
              resArr[resPos += 1] = (0x0/*0b0*/<<7) | point;
          } else if (point <= 0x07ff) {
              resArr[resPos += 1] = (0x6/*0b110*/<<5) | (point>>>6);
              resArr[resPos += 1] = (0x2/*0b10*/<<6)  | (point&0x3f/*0b00111111*/);
          } else {
              resArr[resPos += 1] = (0xe/*0b1110*/<<4) | (point>>>12);
              resArr[resPos += 1] = (0x2/*0b10*/<<6)    | ((point>>>6)&0x3f/*0b00111111*/);
              resArr[resPos += 1] = (0x2/*0b10*/<<6)    | (point&0x3f/*0b00111111*/);
          }
      }
      if (typeof Uint8Array!=="undefined") return new Uint8Array(resArr.buffer.slice(0, resPos+1));
      else return resArr.length === resPos+1 ? resArr : resArr.slice(0, resPos+1); // IE 6-9
  };
  TextEncoder.prototype.toString = function(){return "[object TextEncoder]"};
  try { // Object.defineProperty only works on DOM prototypes in IE8
      Object.defineProperty(TextEncoder.prototype,"encoding",{
          get:function(){if(TextEncoder.prototype.isPrototypeOf(this)) return"utf-8";
                         else throw TypeError("Illegal invocation");}
      });
  } catch(e) { /*IE6-8 fallback*/ TextEncoder.prototype.encoding = "utf-8"; }
  if(typeof Symbol!=="undefined")TextEncoder.prototype[Symbol.toStringTag]="TextEncoder";
}
