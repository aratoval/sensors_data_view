!function(o){"object"==typeof module&&void 0!==module.exports?module.exports=o:o(FusionCharts)}(function(o){!function(o){var e={};function r(a){if(e[a])return e[a].exports;var l=e[a]={i:a,l:!1,exports:{}};return o[a].call(l.exports,l,l.exports,r),l.l=!0,l.exports}r.m=o,r.c=e,r.d=function(o,e,a){r.o(o,e)||Object.defineProperty(o,e,{enumerable:!0,get:a})},r.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},r.t=function(o,e){if(1&e&&(o=r(o)),8&e)return o;if(4&e&&"object"==typeof o&&o&&o.__esModule)return o;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:o}),2&e&&"string"!=typeof o)for(var l in o)r.d(a,l,function(e){return o[e]}.bind(null,l));return a},r.n=function(o){var e=o&&o.__esModule?function(){return o.default}:function(){return o};return r.d(e,"a",e),e},r.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)},r.p="",r(r.s=17)}({17:function(e,r,a){"use strict";var l=function(o){return o&&o.__esModule?o:{default:o}}(a(18));o.addDep(l.default)},18:function(o,e,r){"use strict";e.__esModule=!0;var a={name:"gammel",theme:{base:{chart:{paletteColors:"#7CB5EC, #434348, #8EED7D, #F7A35C, #8085E9, #F15C80, #E4D354, #2B908F, #F45B5B, #91E8E1",usePlotGradientColor:"0",showPlotBorder:"0",showShadow:"0",showBorder:"0",showCanvasBorder:"0",bgColor:"#FFFFFF",bgAlpha:"100",canvasBgAlpha:"0",showAlternateHGridColor:"0",showAlternateVGridColor:"0",divLineAlpha:"100",divLineColor:"#E6E6E6",divLineThickness:"1",yAxisValuesPadding:"10",labelPadding:"10",canvasPadding:"10",valuePadding:"0",adjustDiv:"1",labelDisplay:"AUTO",transposeAxis:"1",showCanvasBase:"0",tooltipColor:"#333333",toolTipBgColor:"#F6F6F6",toolTipBgAlpha:"85",toolTipPadding:"8",toolTipBorderColor:"#999999",toolTipBorderRadius:"3",toolTipBorderThickness:"1",tooltipBorderAlpha:"90",showToolTipShadow:"1",baseFontSize:"11",baseFont:"Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif",baseFontColor:"#666666",outCnvBaseFontSize:"11",outCnvBaseFont:"Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif",outCnvBaseFontColor:"#666666",captionFontSize:"18",captionFontBold:"0",captionFontColor:"#333333",subCaptionFontSize:"12",subCaptionFontBold:"0",subCaptionFontColor:"#666666",valueFontBold:"1",valueFontSize:"11",valueFontColor:"#000000",placeValuesInside:"0",xAxisNameFontBold:"0",xAxisNameFontSize:"12",xAxisNameFontColor:"#666666",yAxisNameFontBold:"0",yAxisNameFontSize:"12",yAxisNameFontColor:"#666666",sYAxisNameFontBold:"0",sYAxisNameFontSize:"12",sYAxisNameFontColor:"#666666",xAxisNamePadding:"8",yAxisNamePadding:"8",sYAxisNamePadding:"8",captionPadding:"10",centerLabelFontSize:"11",centerLabelColor:"#666666",centerLabelBgOval:"1",useEllipsesWhenOverflow:"1",showLegend:"1",legendBgAlpha:"0",legendBorderThickness:"0",legendBorderAlpha:"0",legendShadow:"0",legendItemFontSize:"12",legendItemFontColor:"#333333",legendItemFontBold:"1",legendPosition:"bottom",legendNumColumns:"4",drawCustomLegendIcon:"1",legendIconSides:"2",legendIconBorderThickness:"0",legendItemHiddenColor:"#CCCCCC",drawCrossLineOnTop:"0",crossLineThickness:"1",crossLineColor:"#E6E6E6",crossLineAlpha:"60",showHoverEffect:"1",plotHoverEffect:"1",plotFillHoverAlpha:"95",columnHoverAlpha:"95",scrollColor:"#808080",scrollHeight:"11",flatscrollbars:"1",scrollshowbuttons:"1"}},column2d:{chart:{plotToolText:"$label: <b>$dataValue</b>",paletteColors:"#7CB5EC"}},column3d:{chart:{plotToolText:"$label: <b>$dataValue</b>",paletteColors:"#7CB5EC"}},line:{chart:{paletteColors:"#7CB5EC",drawAnchors:"1",anchorRadius:"4",anchorHoverRadius:"6",plotToolText:"$label: <b>$dataValue</b>",showValues:"0",anchorBgColor:"#7CB5EC",anchorBorderHoverColor:"#D8D8D8",drawCrossLine:"1",anchorHoverEffect:"1",anchorBgHoverAlpha:"95",anchorBorderHoverThickness:"2",legendIconBorderThickness:"1"}},area2d:{chart:{paletteColors:"#7CB5EC",plotBorderColor:"#7CB5EC",showPlotBorder:"1",plotBorderAlpha:"100",plotBorderThickness:"1.5",plotFillAlpha:"70",drawAnchors:"0",plotToolText:"$label: <b>$dataValue</b>",showValues:"0",drawCrossLine:"1"}},bar2d:{chart:{plotToolText:"$label: <b>$dataValue</b>",paletteColors:"#7CB5EC"}},bar3d:{chart:{plotToolText:"$label: <b>$dataValue</b>",paletteColors:"#7CB5EC"}},pie2d:{chart:{showZeroPies:"1",plotToolText:"$label: <b>$dataValue</b>",showPercentValues:"1",showPercentInToolTip:"0",labelSepChar:": ",use3DLighting:"0",enableMultiSlicing:"0",isSmartLineSlanted:"0",smartLineColor:"#434348",smartLineThickness:"1",smartLabelClearance:"0"},data:function(o,e,r){return e=window.Math,{alpha:100-(50<r?e.round(100/e.ceil(r/10)):20)*e.floor(o/10)}}},pie3d:{chart:{showZeroPies:"1",plotToolText:"$label: <b>$dataValue</b>",showPercentValues:"1",showPercentInToolTip:"0",labelSepChar:": ",use3DLighting:"0",enableMultiSlicing:"0",pieYScale:"75",pieSliceDepth:"10",isSmartLineSlanted:"0",smartLineColor:"#434348",smartLineThickness:"1",smartLabelClearance:"0"},data:function(o,e,r){return e=window.Math,{alpha:100-(50<r?e.round(100/e.ceil(r/10)):20)*e.floor(o/10)}}},doughnut2d:{chart:{showZeroPies:"1",plotToolText:"$label: <b>$dataValue</b>",showPercentValues:"1",showPercentInToolTip:"0",labelSepChar:": ",use3DLighting:"0",enableMultiSlicing:"0",isSmartLineSlanted:"0",smartLineColor:"#434348",smartLineThickness:"1",smartLabelClearance:"0"},data:function(o,e,r){return e=window.Math,{alpha:100-(50<r?e.round(100/e.ceil(r/10)):20)*e.floor(o/10)}}},doughnut3d:{chart:{showZeroPies:"1",plotToolText:"$label: <b>$dataValue</b>",showPercentValues:"1",showPercentInToolTip:"0",labelSepChar:": ",use3DLighting:"0",enableMultiSlicing:"0",pieYScale:"75",pieSliceDepth:"10",isSmartLineSlanted:"0",smartLineColor:"#434348",smartLineThickness:"1",smartLabelClearance:"0"},data:function(o,e,r){return e=window.Math,{alpha:100-(50<r?e.round(100/e.ceil(r/10)):20)*e.floor(o/10)}}},pareto2d:{chart:{paletteColors:"#434348",drawAnchors:"1",anchorRadius:"4",anchorHoverRadius:"6",plotToolText:"$label: <b>$dataValue</b>",showValues:"0",lineColor:"#7CB5EC",anchorBgColor:"#7CB5EC",anchorBorderHoverColor:"#D8D8D8",anchorHoverEffect:"1",anchorBgHoverAlpha:"95",anchorBorderHoverThickness:"2"}},pareto3d:{chart:{paletteColors:"#434348",drawAnchors:"1",anchorRadius:"4",anchorHoverRadius:"6",plotToolText:"$label: <b>$dataValue</b>",showValues:"0",lineColor:"#7CB5EC",anchorBgColor:"#7CB5EC",anchorBorderHoverColor:"#D8D8D8",anchorHoverEffect:"1",anchorBgHoverAlpha:"95",anchorBorderHoverThickness:"2"}},mscolumn2d:{chart:{showValues:"0",drawCrossLine:"1"}},mscolumn3d:{chart:{showValues:"0"}},msline:{chart:{drawAnchors:"1",anchorRadius:"4",anchorHoverRadius:"6",showValues:"0",anchorBorderHoverColor:"#D8D8D8",drawCrossLine:"1",anchorHoverEffect:"1",anchorBgHoverAlpha:"95",anchorBorderHoverThickness:"2",legendIconBorderThickness:"1"}},msbar2d:{chart:{showValues:"0",drawCrossLine:"1"}},msbar3d:{chart:{showValues:"0"}},msarea:{chart:{showPlotBorder:"1",plotBorderAlpha:"100",plotBorderThickness:"1.5",plotFillAlpha:"70",drawAnchors:"0",showValues:"0",drawCrossLine:"1"}},marimekko:{chart:{plotToolText:"$seriesName - <b>$label: $dataValue</b>"}},zoomline:{chart:{drawAnchors:"1",anchorRadius:"4",anchorHoverRadius:"6",showValues:"0",anchorBorderHoverColor:"#D8D8D8",anchorHoverEffect:"1",anchorBgHoverAlpha:"95",anchorBorderHoverThickness:"2",legendIconBorderThickness:"1"}},zoomlinedy:{chart:{drawAnchors:"1",anchorRadius:"4",anchorHoverRadius:"6",showValues:"0",anchorBorderHoverColor:"#D8D8D8",anchorHoverEffect:"1",anchorBgHoverAlpha:"95",anchorBorderHoverThickness:"2",legendIconBorderThickness:"1"}},stackedcolumn2d:{chart:{showValues:"0",showSum:"1"}},stackedcolumn3d:{chart:{showValues:"0",showSum:"1"}},stackedbar2d:{chart:{showValues:"0",showSum:"1"}},stackedbar3d:{chart:{showValues:"0",showSum:"1"}},stackedarea2d:{chart:{showValues:"0",showSum:"0",drawCrossLine:"1",plotFillAlpha:"70"}},msstackedcolumn2d:{chart:{showValues:"0",showSum:"0",drawCrossLine:"0"}},mscombi2d:{chart:{drawAnchors:"1",anchorRadius:"4",anchorHoverRadius:"6",showValues:"0",anchorBorderHoverColor:"#D8D8D8",anchorHoverEffect:"1",anchorBgHoverAlpha:"95",anchorBorderHoverThickness:"2",drawCrossLine:"1",legendIconBorderThickness:"1"}},mscombi3d:{chart:{drawAnchors:"1",anchorRadius:"4",anchorHoverRadius:"6",showValues:"0",anchorBorderHoverColor:"#D8D8D8",anchorHoverEffect:"1",anchorBgHoverAlpha:"95",anchorBorderHoverThickness:"2",legendIconBorderThickness:"1"}},mscolumnline3d:{chart:{drawAnchors:"1",anchorRadius:"4",anchorHoverRadius:"6",showValues:"0",anchorBorderHoverColor:"#D8D8D8",anchorHoverEffect:"1",anchorBgHoverAlpha:"95",anchorBorderHoverThickness:"2",legendIconBorderThickness:"1"}},stackedcolumn2dline:{chart:{drawAnchors:"1",anchorRadius:"4",anchorHoverRadius:"6",showValues:"0",anchorBorderHoverColor:"#D8D8D8",anchorHoverEffect:"1",anchorBgHoverAlpha:"95",anchorBorderHoverThickness:"2",drawCrossLine:"1",legendIconBorderThickness:"1"}},stackedcolumn3dline:{chart:{drawAnchors:"1",anchorRadius:"4",anchorHoverRadius:"6",showValues:"0",anchorBorderHoverColor:"#D8D8D8",anchorHoverEffect:"1",anchorBgHoverAlpha:"95",anchorBorderHoverThickness:"2",legendIconBorderThickness:"1"}},mscombidy2d:{chart:{drawAnchors:"1",anchorRadius:"4",anchorHoverRadius:"6",showValues:"0",anchorBorderHoverColor:"#D8D8D8",anchorHoverEffect:"1",anchorBgHoverAlpha:"95",anchorBorderHoverThickness:"2",drawCrossLine:"1",legendIconBorderThickness:"1"}},mscolumn3dlinedy:{chart:{drawAnchors:"1",anchorRadius:"4",anchorHoverRadius:"6",showValues:"0",anchorBorderHoverColor:"#D8D8D8",anchorHoverEffect:"1",anchorBgHoverAlpha:"95",anchorBorderHoverThickness:"2",legendIconBorderThickness:"1"}},stackedcolumn3dlinedy:{chart:{drawAnchors:"1",anchorRadius:"4",anchorHoverRadius:"6",showValues:"0",anchorBorderHoverColor:"#D8D8D8",anchorHoverEffect:"1",anchorBgHoverAlpha:"95",anchorBorderHoverThickness:"2",legendIconBorderThickness:"1"}},msstackedcolumn2dlinedy:{chart:{drawAnchors:"1",anchorRadius:"4",anchorHoverRadius:"6",showValues:"0",anchorBorderHoverColor:"#D8D8D8",anchorHoverEffect:"1",anchorBgHoverAlpha:"95",anchorBorderHoverThickness:"2",drawCrossLine:"1",legendIconBorderThickness:"1"}},scatter:{chart:{drawCustomLegendIcon:"0",drawAnchors:"1",anchorRadius:"4",anchorHoverRadius:"7",showValues:"0",anchorBorderHoverColor:"#D8D8D8",anchorHoverEffect:"1",anchorBgHoverAlpha:"95",anchorBorderHoverThickness:"2"}},bubble:{chart:{quadrantLineThickness:"2",quadrantLineColor:"#000000",quadrantLineDashed:"1",quadrantLineAlpha:"100",setAdaptiveYMin:"1",setAdaptiveXMin:"1",quadrantLineDashGap:"3.5",quadrantLineDashLen:"2",use3dlighting:"0",plotFillAlpha:"80"}},zoomscatter:{chart:{drawCustomLegendIcon:"0",drawAnchors:"1",anchorRadius:"4",anchorHoverRadius:"7",showValues:"0"}},scrollcolumn2d:{chart:{showLegend:"1",showShadow:"0",adjustDiv:"1",flatScrollBars:"1",scrollShowButtons:"1",scrollHeight:"15",scrollColor:"#F3F3F3"}},scrollline2d:{chart:{showValues:"0",showShadow:"0",lineThickness:"2",anchorRadius:"4",showLegend:"1",adjustDiv:"1",flatScrollBars:"1",scrollShowButtons:"1",scrollHeight:"15",scrollColor:"#F3F3F3",anchorHoverEffect:"1",anchorHoverRadius:"6",anchorBorderHoverThickness:"2",anchorBgHoverColor:"#FFFFFF",legendIconBorderThickness:"1"}},scrollarea2d:{chart:{showValues:"0",showCanvasBase:"0",canvasBaseDepth:"0",showShadow:"0",chartTopMargin:"35",adjustDiv:"1",lineThickness:"2",drawAnchors:"0",showLegend:"1",flatScrollBars:"1",scrollShowButtons:"1",scrollHeight:"15",scrollColor:"#F3F3F3"}},scrollstackedcolumn2d:{chart:{showLegend:"1",showValues:"0",flatScrollBars:"1",scrollShowButtons:"1",scrollHeight:"15",scrollColor:"#F3F3F3"}},scrollcombi2d:{chart:{showValues:"0",lineThickness:"2",anchorRadius:"4",showLegend:"1",flatScrollBars:"1",scrollShowButtons:"1",scrollHeight:"15",scrollColor:"#F3F3F3",anchorHoverEffect:"1",anchorHoverRadius:"4",anchorBorderHoverThickness:"2",anchorBgHoverColor:"#FFFFFF",legendIconBorderThickness:"1"}},scrollcombidy2d:{chart:{showValues:"0",lineThickness:"2",anchorRadius:"4",showLegend:"1",flatScrollBars:"1",scrollShowButtons:"1",scrollHeight:"15",scrollColor:"#F3F3F3",anchorHoverEffect:"1",anchorHoverRadius:"4",anchorBorderHoverThickness:"2",anchorBgHoverColor:"#FFFFFF",legendIconBorderThickness:"1"}},angulargauge:{chart:{setAdaptiveMin:"1",adjustTM:"1",tickvaluedistance:"10",placeTicksInside:"0",autoAlignTickValues:"1",showGaugeBorder:"0",minortmnumber:"0",majorTMHeight:"8",gaugeFillMix:"{light-0}",pivotbgcolor:"#000000",pivotfillmix:"0",showpivotborder:"1",pivotBorderColor:"#FFFFFF",showValue:"0",valueBelowPivot:"1"},dials:{dial:[{bgColor:"#000000",borderThickness:"0",rearExtension:"13"}]}},bulb:{chart:{is3D:"0",placeValuesInside:"1",valueFont:"Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif"}},cylinder:{chart:{cylRadius:"50",cylYScale:"30"}},hled:{chart:{showGaugeBorder:"0",setAdaptiveMin:"1",adjustTM:"1",placeTicksInside:"0",autoAlignTickValues:"1",minortmnumber:"0",majorTMHeight:"8",majorTMAlpha:"50"}},hlineargauge:{chart:{showGaugeBorder:"0",setAdaptiveMin:"1",adjustTM:"1",placeTicksInside:"0",autoAlignTickValues:"1",minortmnumber:"0",majorTMHeight:"8",majorTMAlpha:"50",gaugeFillMix:"{light-0}"}},thermometer:{chart:{use3DLighting:"0",manageResize:"1",autoScale:"1",showGaugeBorder:"1",gaugeBorderAlpha:"40",placeTicksInside:"0",autoAlignTickValues:"1",minortmnumber:"0",majorTMHeight:"8",majorTMAlpha:"50"}},vled:{chart:{showGaugeBorder:"0",setAdaptiveMin:"1",adjustTM:"1",placeTicksInside:"0",autoAlignTickValues:"1",minortmnumber:"0",majorTMHeight:"8",majorTMAlpha:"50"}},realtimearea:{chart:{showLegend:"1",showValues:"0"}},realtimecolumn:{chart:{showLegend:"1",showValues:"0"}},realtimeline:{chart:{showValues:"0",lineThickness:"2",anchorRadius:"4",showLegend:"1",anchorHoverEffect:"1",anchorHoverRadius:"6",anchorBorderHoverThickness:"2",anchorBgHoverColor:"#FFFFFF",legendIconBorderThickness:"1"}},realtimestackedarea:{chart:{showLegend:"1",showValues:"0",showSum:"0",plotFillAlpha:"80"}},realtimestackedcolumn:{chart:{showLegend:"1",showValues:"1",showSum:"1"}},realtimelinedy:{chart:{lineThickness:"2",anchorRadius:"4",showLegend:"1",anchorHoverEffect:"1",anchorHoverRadius:"6",anchorBorderHoverThickness:"2",anchorBgHoverColor:"#FFFFFF",legendIconBorderThickness:"1"}},sparkline:{chart:{plotFillColor:"#7CB5EC",anchorRadius:"4",highColor:"#8EED7D",lowColor:"#F45B5B",captionPosition:"top",showOpenAnchor:"0",showCloseAnchor:"0",showOpenValue:"0",showCloseValue:"0",showHighLowValue:"0",periodColor:"#C0C0C0"}},sparkcolumn:{chart:{plotFillColor:"#7CB5EC",highColor:"#8EED7D",lowColor:"#F45B5B",captionPosition:"top",periodColor:"#C0C0C0"}},sparkwinloss:{chart:{winColor:"#7CB5EC",lossColor:"#F45B5B",captionPosition:"top",drawColor:"#E4D354",scoreLessColor:"#8085E9",periodColor:"#C0C0C0"}},hbullet:{chart:{plotFillColor:"#434348",showTickMarks:"0",showTickValues:"1",showLimits:"1"}},vbullet:{chart:{plotFillColor:"#434348",showTickMarks:"0",showTickValues:"1",showLimits:"1"}},funnel:{chart:{is2D:"1",isSmartLineSlanted:"0",smartLineColor:"#434348",smartLineThickness:"1",smartLabelClearance:"0",streamlinedData:"1",useSameSlantAngle:"1",alignCaptionWithCanvas:"1",showPlotBorder:"1",plotBorderColor:"#FFFFFF",plotBorderThickness:"1.5",plotBorderAlpha:"100"}},pyramid:{chart:{is2D:"1",isSmartLineSlanted:"0",smartLineColor:"#434348",smartLineThickness:"1",smartLabelClearance:"0",streamlinedData:"1",useSameSlantAngle:"1",alignCaptionWithCanvas:"1",use3dlighting:"0",showPlotBorder:"1",plotBorderColor:"#FFFFFF",plotBorderThickness:"1.5",plotBorderAlpha:"100"}},gantt:{chart:{taskBarFillMix:"{light+0}",gridBorderAlpha:"100",gridBorderColor:"#E6E6E6",ganttLineColor:"#E6E6E6",ganttLineAlpha:"100",taskBarRoundRadius:"2",flatScrollBars:"1",showHoverEffect:"1",plotHoverEffect:"1",plotFillHoverAlpha:"50",showCategoryHoverBand:"1",categoryHoverBandAlpha:"50",showGanttPaneVerticalHoverBand:"1",showProcessHoverBand:"1",processHoverBandAlpha:"50",showGanttPaneHorizontalHoverBand:"1",showConnectorHoverEffect:"1",connectorHoverAlpha:"50",showTaskHoverEffect:"1",taskHoverFillAlpha:"50",slackHoverFillAlpha:"50",scrollShowButtons:"0",drawCustomLegendIcon:"0",legendShadow:"0",legendBorderAlpha:"0",legendBorderThickness:"0",legendIconBorderThickness:"0",legendBgAlpha:"0"},categories:[{fontcolor:"#434348",fontsize:"11",bgcolor:"#F4F4F4",hoverBandAlpha:"50",showGanttPaneHoverBand:"1",showHoverBand:"1",category:[{fontcolor:"#434348",fontsize:"11",bgcolor:"#F4F4F4"}]}],tasks:{showBorder:"0",showHoverEffect:"0"},processes:{fontcolor:"#434348",isanimated:"0",bgcolor:"#FFFFFF",bgAlpha:"70",headerbgcolor:"#F4F4F4",headerfontcolor:"#434348",showGanttPaneHoverBand:"1",showHoverBand:"1"},text:{fontcolor:"#434348",bgcolor:"#FFFFFF"},datatable:{fontcolor:"#434348",bgcolor:"#FFFFFF",bgAlpha:"100",datacolumn:[{bgcolor:"#FFFFFF"}]},connectors:[{hoverThickness:"1.5"}],milestones:{milestone:[{color:"#8EED7D"}]}},logmscolumn2d:{chart:{showValues:"0",drawCrossLine:"1"}},logmsline:{chart:{drawAnchors:"1",anchorRadius:"4",anchorHoverRadius:"6",showValues:"0",anchorBorderHoverColor:"#D8D8D8",drawCrossLine:"1",anchorHoverEffect:"1",anchorBgHoverAlpha:"95",anchorBorderHoverThickness:"2",legendIconBorderThickness:"1"}},spline:{chart:{paletteColors:"#7CB5EC",drawAnchors:"1",anchorRadius:"4",anchorHoverRadius:"6",showValues:"0",anchorBgColor:"#7CB5EC",anchorBorderHoverColor:"#D8D8D8",anchorHoverEffect:"1",anchorBgHoverAlpha:"95",anchorBorderHoverThickness:"2",plotToolText:"$label: <b>$dataValue</b>",legendIconBorderThickness:"1"}},splinearea:{chart:{paletteColors:"#7CB5EC",drawAnchors:"0",showValues:"0",plotFillAlpha:"70",plotToolText:"$label: <b>$dataValue</b>"}},msspline:{chart:{drawAnchors:"1",anchorRadius:"4",anchorHoverRadius:"6",showValues:"0",anchorBorderHoverColor:"#D8D8D8",drawCrossLine:"1",anchorHoverEffect:"1",anchorBgHoverAlpha:"95",anchorBorderHoverThickness:"2",legendIconBorderThickness:"1"}},mssplinearea:{chart:{showValues:"0",showLegend:"1",drawAnchors:"0",plotFillAlpha:"70"}},errorbar2d:{chart:{paletteColors:"#7CB5EC, #8EED7D, #F7A35C, #8085E9, #F15C80, #E4D354, #2B908F, #F45B5B, #91E8E1",errorBarColor:"#434348",errorBarThickness:"1.3",showValues:"0"}},errorline:{chart:{paletteColors:"#7CB5EC, #8EED7D, #F7A35C, #8085E9, #F15C80, #E4D354, #2B908F, #F45B5B, #91E8E1",errorBarColor:"#434348",errorBarThickness:"1.3",drawAnchors:"1",anchorRadius:"4",anchorHoverRadius:"6",showValues:"0",anchorBorderHoverColor:"#D8D8D8",anchorHoverEffect:"1",anchorBgHoverAlpha:"95",anchorBorderHoverThickness:"2",legendIconBorderThickness:"1"}},errorscatter:{chart:{paletteColors:"#7CB5EC, #8EED7D, #F7A35C, #8085E9, #F15C80, #E4D354, #2B908F, #F45B5B, #91E8E1",errorBarColor:"#434348",errorBarThickness:"1.3",drawCustomLegendIcon:"0",drawAnchors:"1",anchorRadius:"4",anchorHoverRadius:"7",showValues:"0",anchorBorderHoverColor:"#D8D8D8",anchorHoverEffect:"1",anchorBgHoverAlpha:"95",anchorBorderHoverThickness:"2"}},inversemsarea:{chart:{showValues:"0",drawCrossLine:"1",showLegend:"1",plotFillAlpha:"70"}},inversemscolumn2d:{chart:{showLegend:"1",showValues:"0"}},inversemsline:{chart:{drawAnchors:"1",anchorRadius:"4",anchorHoverRadius:"6",showValues:"0",anchorBorderHoverColor:"#D8D8D8",drawCrossLine:"1",anchorHoverEffect:"1",anchorBgHoverAlpha:"95",anchorBorderHoverThickness:"2",legendIconBorderThickness:"1"}},dragcolumn2d:{chart:{showValues:"0",showLegend:"1"},categories:[{category:[{fontItalic:"1"}]}],dataset:[{data:[{allowDrag:"1",alpha:"70"}]}]},dragline:{chart:{drawAnchors:"1",anchorRadius:"4",anchorHoverRadius:"6",showValues:"0",anchorBorderHoverColor:"#D8D8D8",anchorHoverEffect:"1",anchorBgHoverAlpha:"95",anchorBorderHoverThickness:"2",legendIconBorderThickness:"1"},categories:[{category:[{fontItalic:"1"}]}],dataset:[{data:[{allowDrag:"1",alpha:"70",dashed:"1"}]}]},dragarea:{chart:{showValues:"0",showLegend:"1",drawAnchors:"0",plotFillAlpha:"70"},categories:[{category:[{fontItalic:"1"}]}],dataset:[{data:[{allowDrag:"1",dashed:"1"}]}]},treemap:{chart:{parentLabelLineHeight:"13",baseFontSize:"11",labelFontSize:"11",showParent:"1",showNavigationBar:"0",plotBorderThickness:"0.5",plotBorderColor:"#FFFFFF",labelGlow:"0",labelGlowIntensity:"100",btnBackChartTooltext:"Back",btnResetChartTooltext:"Home",legendScaleLineThickness:"0",legendaxisborderalpha:"0",legendShadow:"0",toolbarButtonScale:"1.50",plotToolText:"$label, $dataValue, $sValue"},data:[{fillColor:"#F4F4F4",data:[{fillColor:"#F4F4F4"}]}]},radar:{chart:{showLegend:"1",plotFillAlpha:"40",anchorBgAlpha:"40",drawAnchors:"1",anchorRadius:"4",anchorHoverRadius:"6",showValues:"0",anchorBorderHoverColor:"#D8D8D8",anchorHoverEffect:"1",anchorBgHoverAlpha:"95",anchorBorderHoverThickness:"2",legendIconBorderThickness:"1"}},heatmap:{chart:{baseFontSize:"11",labelFontSize:"11",showPlotBorder:"1",plotBorderAlpha:"100",plotBorderThickness:"0.5",plotBorderColor:"#FFFFFF",tlFontColor:"#FDFDFD",tlFont:"Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif",tlFontSize:"10",trFontColor:"#FDFDFD",trFont:"Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif",trFontSize:"10",blFontColor:"#FDFDFD",blFont:"Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif",blFontSize:"10",brFontColor:"#FDFDFD",brFont:"Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif",brFontSize:"10",captionPadding:"20",legendScaleLineThickness:"0",legendaxisborderalpha:"0",legendShadow:"0"},colorrange:{gradient:"1",code:"#7CB5EC"}},boxandwhisker2d:{chart:{drawCustomLegendIcon:"0",showLegend:"1",showDetailedLegend:"1",showValues:"0",showPlotBorder:"1",plotBorderColor:"#7CB5EC",plotBorderAlpha:"100",plotBorderThickness:"1.5",upperBoxBorderAlpha:"0",lowerBoxBorderAlpha:"0",lowerQuartileAlpha:"0",upperQuartileAlpha:"0",upperWhiskerColor:"#7CB5EC",upperWhiskerThickness:"1.5",lowerWhiskerColor:"#7CB5EC",lowerWhiskerThickness:"1.5",medianColor:"#7CB5EC",medianThickness:"0.7",medianAlpha:"100",outliericonshape:"spoke",outliericonsides:"9",meaniconcolor:"#7CB5EC",meanIconShape:"spoke",meaniconsides:"9",meaniconradius:"5"}},candlestick:{chart:{showShadow:"0",showVPlotBorder:"0",bearFillColor:"#F45B5B",bullFillColor:"#8EED7D",plotLineThickness:"0.3",plotLineAlpha:"100",divLineDashed:"0",showDetailedLegend:"1",showHoverEffect:"1",plotHoverEffect:"1",showVolumeChart:"0",trendLineColor:"#434348",trendLineThickness:"1",trendValueAlpha:"100",rollOverBandAlpha:"100",rollOverBandColor:"#E6E6E6"},categories:[{verticalLineColor:"#434348",verticalLineThickness:"1",verticalLineAlpha:"35"}]},dragnode:{chart:{use3DLighting:"0",plotBorderThickness:"0",plotBorderAlpha:"0",showDetailedLegend:"1",divLineThickness:"0"},dataset:[{color:"#7CB5EC"}],connectors:[{connector:[{color:"#434348",strength:"1.5"}]}]},msstepline:{chart:{drawAnchors:"0",lineThickness:"2",showValues:"0",plotToolText:"$label: <b>$dataValue</b>"}},multiaxisline:{chart:{showValues:"0",showLegend:"1",lineThickness:"2",connectNullData:"1",drawAnchors:"0",divLineDashed:"0",divLineColor:"#E6E6E6",vDivLineColor:"#E6E6E6",vDivLineDashed:"0",yAxisNameFontSize:"11",drawCustomLegendIcon:"0",legendIconBorderThickness:"1"},axis:[{divLineColor:"#E6E6E6",setAdaptiveYMin:"1",divLineDashed:"0"}]},multilevelpie:{chart:{useHoverColor:"1",hoverFillColor:"#8087E5",showHoverEffect:"1",plotHoverEffect:"1"},category:[{color:"#8087E5",category:[{color:"#7CB5EC",category:[{color:"#7CB5EC"}]}]}]},selectscatter:{chart:{drawCustomLegendIcon:"0",drawAnchors:"1",anchorRadius:"4",anchorHoverRadius:"7",showValues:"0",anchorBorderHoverColor:"#D8D8D8",anchorHoverEffect:"1",anchorBgHoverAlpha:"95",anchorBorderHoverThickness:"2"}},waterfall2d:{chart:{showValues:"0",paletteColors:"#7CB5EC, #434348, #8085E9, #F15C80, #E4D354, #2B908F, #F45B5B, #91E8E1",positiveColor:"#8EED7D",negativeColor:"#F7A35C",showConnectors:"1",connectorDashed:"1",connectorThickness:"1.5",connectorColor:"#434348"}},kagi:{chart:{rallyThickness:"2",declineThickness:"2",drawAnchors:"0",rallyColor:"#8EED7D",declineColor:"#F45B5B",showValues:"0"}},geo:{chart:{showLabels:"0",legendScaleLineThickness:"0",legendaxisborderalpha:"0",legendShadow:"0",fillColor:"#E6E6E6",showEntityHoverEffect:"1",entityFillHoverAlpha:"70",connectorHoverAlpha:"70",markerBorderHoverAlpha:"70",showBorder:"1",borderColor:"#434348",borderThickness:"0.3",nullEntityColor:"434348",nullEntityAlpha:"30",entityFillHoverColor:"#434348"},colorrange:{gradient:"1",code:"#7CB5EC"}}}};e.default={extension:a,name:"gammelTheme",type:"theme"}}})});
//# sourceMappingURL=fusioncharts.theme.gammel.js.map