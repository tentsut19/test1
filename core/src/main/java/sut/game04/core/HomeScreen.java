package sut.game04.core;

import playn.core.Font;
import playn.core.Image;
import playn.core.ImageLayer;
import playn.core.PlayN;
import react.UnitSlot;
import screen.GameScreen;
import screen.TestScreen;
import tripleplay.game.ScreenStack;
import tripleplay.game.UIScreen;
import tripleplay.ui.*;
import tripleplay.ui.layout.AxisLayout;

import static playn.core.PlayN.assets;
import static playn.core.PlayN.graphics;

public class HomeScreen extends UIScreen{

    private Image backIm,bg,attk;
    private ImageLayer backLayer,bgLayer,attkLayer ;
    private final ScreenStack ss;
    private Root root;
    public HomeScreen(ScreenStack ss){
        this.ss = ss;
    }

    @Override
    public void wasShown() {
        super.wasShown();
        bg = assets().getImage("images/bg.png");
        bgLayer = graphics().createImageLayer(bg);
        graphics().rootLayer().add(bgLayer);
    }
}
