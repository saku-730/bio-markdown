"use client";

import dynamic from 'next/dynamic';

// ★ next/dynamic で Plot コンポーネントをクライアント側でのみ読み込む
//    ssr: false が非常に重要なのだ
const Plot = dynamic(() => import('react-plotly.js'), {
  ssr: false,
});

// Plotly.js の JSON 形式
type PlotlyJson = {
  data: any[];
  layout: object;
};

export default function PlotlyChartRenderer({ jsonString }: { jsonString: string }) {
  let config: PlotlyJson;
  console.log("Plotly パース");

  try {
    // 渡されたJSON文字列をパース
    config = JSON.parse(jsonString);
  } catch (e) {
    console.error("Plotly JSONのパースに失敗:", e);
    return <div style={{ color: 'red' }}>グラフ設定JSONのパースに失敗しました。</div>;
  }
  
  // data と layout があるか最低限チェック
  if (!config.data || !config.layout) {
     return <div style={{ color: 'red' }}>Plotly JSONの形式が正しくありません (data, layout が必須です)。</div>;
  }


  return (
    <div style={{ width: '100%', border: '1px solid #ccc', margin: '20px 0' }}>
      {/* Plotly の Plot コンポーネントに data と layout を渡す */}
      <Plot
        data={config.data}
        layout={config.layout}
        // コンテナの幅に追従させる
        style={{ width: '100%', height: '100%' }}
        useResizeHandler={true} 
      />
    </div>
  );
}
