export default function (rawScript: string): string {
    const s_aym: string = `アユム`;
    const s_poe: string = `ぽえ`;
    const s_0: string = `${s_aym}.ぽえきゅん`;
    const s_1: string = `${s_poe}.アユアンドピース`;
    const s_2: string = `${s_aym}.ご主人さま`;
    const s_3: string = `${s_poe}.ぽえキュン`;
    const s_4: string = `${s_aym}.ぽえ`;
    const s_5: string = `${s_poe}.ぽえピカきゅん`;
    const s_6: string = `${s_aym}.ご主人さまに届けっ`;
    const s_7: string = `${s_poe}.ご主人さまぁー`;
    const s_8: string = `${s_aym}.お疲れ様ですにゃ`;
    const s_9: string = `${s_poe}.心も体もぽえっと`;
    const s_a: string = `${s_aym}.アユにお任せなのです`;
    const s_b: string = `${s_aym}.史上最高のぽえぽえぶりですぅ`;
    const s_c: string = `${s_aym}.きゅんきゅんさせちゃいますよ`;
    const s_d: string = `${s_aym}.ご主人様すごすぎですっ`;
    const s_e: string = `${s_aym}.極上幸せメイドですっ`;
    const s_f: string = `${s_aym}.始まりの今日`;
    const s_true: string = `${s_aym}.片想いジャケ`;
    const s_false: string = `${s_poe}.ぽえキュンケーキ`;
    const s_object: string = `${s_aym}.キメキメきゅん`;
    const s_undefined: string = `${s_poe}.ご主人さまから`;
    const s_n: string = `${s_aym}.おモチの気持ち`;
    const s_o: string = `${s_aym}.ヴァンパイアの姫君`;
    const s_s: string = `${s_aym}.ぽえフルパーティ`;
    const s_t: string = `${s_aym}.ご奉仕ブラッシング`;
    const s_r: string = `${s_aym}.夢のシール`;
    const s_u: string = `${s_aym}.DonKanBoyジャケ`;
    const s_quot: string = `${s_aym}.ウサギ`;
    const s_backSlash: string = `${s_aym}.ぽえきゅん花嫁`;
    const s_bsbsu00: string = `${s_aym}.リングピロー`;
    const s_bsbsu: string = `${s_aym}.片想いジャケ`;
    const s_constructor: string = `${s_aym}.ご用意いたします`;
    const s_code: string = `${s_aym}.和風メイド`;
    let result: string = '';
  
    /**
     * Convert to UTF-16 Escaped Expression
     */
    let toUtf16 = function(rawChar: string): string {
      return '\\u' + ('000' + rawChar.charCodeAt(0).toString(16)).slice(-4);
    }
  
    rawScript.split('').forEach((char) => {
      result += toUtf16(char)
        .replace('\\u00', `${s_bsbsu00}+`)
        .replace('\\u', `${s_bsbsu}+`)
        .replace(/0/g, `${s_0}+`)
        .replace(/1/g, `${s_1}+`)
        .replace(/2/g, `${s_2}+`)
        .replace(/3/g, `${s_3}+`)
        .replace(/4/g, `${s_4}+`)
        .replace(/5/g, `${s_5}+`)
        .replace(/6/g, `${s_6}+`)
        .replace(/7/g, `${s_7}+`)
        .replace(/8/g, `${s_8}+`)
        .replace(/9/g, `${s_9}+`)
        .replace(/a/g, `${s_a}+`)
        .replace(/b/g, `${s_b}+`)
        .replace(/c/g, `${s_c}+`)
        .replace(/d/g, `${s_d}+`)
        .replace(/e/g, `${s_e}+`)
        .replace(/f/g, `${s_f}+`);
    });
  
    const camoufrage: string = `
      (${s_aym})=(/折笠/),
      (${s_0})=(-!!/折笠/.アユム),
      (${s_poe})=(/ご主人さま/),
      ${s_1}=(- -!${s_0}),
      ${s_2}=${s_1}- -!${s_0},
      (${s_3})=${s_2}- -${s_1},
      ${s_4}=${s_3}- -!${s_0},
      ${s_5}=(${s_4}- -${s_1}),
      ${s_6}=${s_5}- -!${s_0},
      ${s_7}=${s_6}- -${s_1},
      ${s_8}=${s_7}- -!${s_0},
      ${s_9}=${s_8}- -${s_1},
      `;
  
    result = `
      ${s_aym}=(/折笠/),
      (${s_0})=(-!!/折笠/.アユム),
      ${s_poe}=(/ご主人さま/),
      ${s_1}=(- -!${s_0}),
      ${s_2}=${s_1}- -!${s_0},
      ${s_3}=${s_2}- -${s_1},
      ${s_4}=${s_3}- -!${s_0},
      ${s_5}=${s_4}- -${s_1},
      ${s_6}=${s_5}- -!${s_0},
      ${s_7}=${s_6}- -${s_1},
      ${s_8}=${s_7}- -!${s_0},
      ${s_9}=${s_8}- -${s_1},
      ｰ="",
      ${s_true}=!${s_0}+ｰ,
      ${s_false}=!${s_1}+ｰ,
      ${s_object}={"折笠":!${s_1}}+ｰ,
      ${s_undefined}=${s_aym}.ご奉仕するにゃん+ｰ,
      ${s_a}=${s_false}[${s_1}],
      ${s_b}=${s_object}[${s_2}],
      ${s_c}=${s_object}[${s_5}],
      ${s_d}=${s_undefined}[${s_2}],
      ${s_e}=${s_true}[${s_3}],
      ${s_f}=${s_false}[${s_0}],
      ${s_n}=${s_undefined}[${s_1}],
      ${s_o}=${s_object}[${s_1}],
      ${s_r}=${s_true}[${s_1}],
      ${s_s}=${s_false}[${s_3}],
      ${s_t}=${s_true}[${s_0}],
      ${s_u}=${s_undefined}[${s_0}],
      ${s_aym}.まこツンと一緒なら無敵ですぅ="\\"\\\\\\\\\\\\",
      ${s_quot}=${s_aym}.まこツンと一緒なら無敵ですぅ[${s_0}],
      ${s_backSlash}=${s_aym}.まこツンと一緒なら無敵ですぅ[${s_1}],
      ${s_bsbsu}=${s_backSlash}+${s_u},
      ${s_bsbsu00}=${s_bsbsu}+${s_0}+${s_0},
      ${s_constructor}=${s_c}+${s_o}+${s_n}+${s_s}+${s_t}+${s_r}+${s_u}+${s_c}+${s_t}+${s_o}+${s_r},
      ${s_code}=${s_r}+${s_e}+${s_t}+${s_u}+${s_r}+${s_n}+${s_quot}+${result}${s_quot},
      ${s_constructor}=${s_0}[${s_constructor}][${s_constructor}],
      ${s_code}=${s_constructor}(${s_code})(${s_0}),
      ${s_code}=${s_constructor}(${s_code}),
      ${s_code}=${s_code}(${s_constructor}[${s_0}]),
      ${camoufrage}
      ${s_poe}`
      .replace(/^\s+/gm, '')
      .replace(/\n/g, '');
    return result;
  }