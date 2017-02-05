System.register(["@angular/core", "hide/SComponent", './canvas-template.html', './preview-template.html', './button.css', "./d3.min"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, SComponent_1, canvas_template_html_1, preview_template_html_1, button_css_1, d3;
    var XChart, Preview;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (SComponent_1_1) {
                SComponent_1 = SComponent_1_1;
            },
            function (canvas_template_html_1_1) {
                canvas_template_html_1 = canvas_template_html_1_1;
            },
            function (preview_template_html_1_1) {
                preview_template_html_1 = preview_template_html_1_1;
            },
            function (button_css_1_1) {
                button_css_1 = button_css_1_1;
            },
            function (d3_1) {
                d3 = d3_1;
            }],
        execute: function() {
            //var d3 = require("./d3.min.js");
            /**
             * Button component.
             */
            XChart = (function (_super) {
                __extends(XChart, _super);
                function XChart() {
                    _super.apply(this, arguments);
                }
                // constructor(){
                // 	super();
                // }
                XChart.prototype.ngOnInit = function () {
                    var dataset = [250, 210, 170, 130, 90];
                    var rectHeight = 25; //每个矩形所占的像素高度(包括空白)
                    var svg = d3.select("#myChart");
                    svg.selectAll("rect")
                        .data(dataset)
                        .enter()
                        .append("rect")
                        .attr("x", 20)
                        .attr("y", function (d, i) {
                        return i * rectHeight;
                    })
                        .attr("width", function (d) {
                        return d;
                    })
                        .attr("height", rectHeight - 2)
                        .attr("fill", "steelblue");
                    //d3.select("#myChart").attr("height", 200).attr("width", 200).attr("fill","red");
                };
                XChart = __decorate([
                    core_1.Component({
                        selector: 'my-chart',
                        template: canvas_template_html_1.default,
                        styles: [button_css_1.default],
                        encapsulation: core_1.ViewEncapsulation.None
                    }), 
                    __metadata('design:paramtypes', [])
                ], XChart);
                return XChart;
            }(SComponent_1.SComponent));
            exports_1("XChart", XChart);
            Preview = (function (_super) {
                __extends(Preview, _super);
                function Preview() {
                    _super.apply(this, arguments);
                }
                Preview = __decorate([
                    core_1.Component({
                        selector: 'preview',
                        template: preview_template_html_1.default,
                        encapsulation: core_1.ViewEncapsulation.None
                    }), 
                    __metadata('design:paramtypes', [])
                ], Preview);
                return Preview;
            }(XChart));
            exports_1("Preview", Preview);
        }
    }
});
//# sourceMappingURL=Canvas.js.map