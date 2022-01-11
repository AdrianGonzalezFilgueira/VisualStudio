{
    let xIni = 50;
    let yIni = 50;
    var layer = new Konva.Layer();
    var width = window.innerWidth;
    var height = window.innerHeight;



    function dibujarCirculo() {

        xIni+=50;

    
        var stage = new Konva.Stage({
            container: 'zona-juego',
            width: width,
            height: height,
        });
        var circle = new Konva.Circle({
            x: xIni,
            y: yIni,
            radius: 20,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 4,
        });

        // add the shape to the layer
        layer.add(circle);
        stage.add(layer);


    }

    function dibujarHexagono() {
        xIni+=50;

        var star = new Konva.Star({
            x: xIni,
            y: yIni,
            numPoints: 3,
            innerRadius: 20,
            outerRadius: 20,
            fill: 'yellow',
            stroke: 'black',
            strokeWidth: 4
          });

          var stage = new Konva.Stage({
            container: 'zona-juego',
            width: width,
            height: height,
        });

        layer.add(star);
        stage.add(layer);
    }
}