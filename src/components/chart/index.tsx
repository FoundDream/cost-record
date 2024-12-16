import React from "react";
import { line, curveCatmullRom } from "d3-shape";
import { bill } from "../../api/getBillsInfo";

interface Props {
  data: bill[];
  width?: number;
  height?: number;
}

const SmoothLineChart: React.FC<Props> = ({
  data,
  width = 500,
  height = 200,
}) => {
  // 数据处理，提取金额 (amount)
  const formattedData = data.map((bill, index) => ({
    x: (index / (data.length - 1)) * width, // 根据索引等比例分布 x 轴
    y: height - (bill.amount / Math.max(...data.map((d) => d.amount))) * height, // 金额转化为 y 坐标
  }));

  // 使用 d3-shape 生成平滑曲线路径
  const lineGenerator = line<{ x: number; y: number }>()
    .x((d: { x: any }) => d.x)
    .y((d: { y: any }) => d.y)
    .curve(curveCatmullRom.alpha(0.5)); // 使用平滑曲线 Catmull-Rom

  const pathData = lineGenerator(formattedData) || "";

  return (
    <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`}>
      {/* 渐变定义 */}
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.3} />{" "}
          {/* 更淡的开始颜色 */}
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0} />{" "}
          {/* 渐变到透明 */}
        </linearGradient>
      </defs>

      {/* 渲染填充区域 */}
      <path
        d={`${pathData} L ${width} ${height} L 0 ${height} Z`} // 添加底部填充路径
        fill="url(#gradient)"
      />

      {/* 渲染曲线 */}
      <path d={pathData} stroke="#8b5cf6" strokeWidth="10" fill="none" />
    </svg>
  );
};

export default SmoothLineChart;
