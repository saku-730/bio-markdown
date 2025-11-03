---
title: 'Plotly.js のテスト'
---

# Plotly.js のインタラクティブグラフ

マークダウンに書いたJSON設定から、
`plotly.js` がグラフを描画するのだ。
マウスでズームしたり、ドラッグしたりできるのだ。

```plotly
{
  "data": [
    {
      "x": ["標本A", "標本B", "標本C"],
      "y": [20, 14, 23],
      "type": "bar",
      "name": "グループ1"
    },
    {
      "x": ["標本A", "標本B", "標本C"],
      "y": [12, 18, 29],
      "type": "bar",
      "name": "グループ2"
    }
  ],
  "layout": {
    "title": "マークダウンから生成したPlotlyグラフ",
    "barmode": "group",
    "autosize": true
  }
}
```

これはすごいインタラクティブなのだ！

```plotly
{
  "data": [
    {
      "x": [1, 2, 3, 4, 5],
      "y": [1, 4, 9, 16, 25],
      "type": "scatter",
      "mode": "lines+markers",
      "name": "y = x^2"
    }
  ],
  "layout": {
    "title": "折れ線グラフ（Scatter）"
  }
}
```
