package screen;

import com.sun.jndi.url.iiop.iiopURLContext;
import org.jbox2d.callbacks.ContactImpulse;
import org.jbox2d.callbacks.ContactListener;
import org.jbox2d.callbacks.DebugDraw;
import org.jbox2d.collision.Manifold;
import org.jbox2d.collision.shapes.PolygonShape;
import org.jbox2d.common.Vec2;
import org.jbox2d.dynamics.*;
import org.jbox2d.dynamics.contacts.Contact;
import playn.core.*;
import playn.core.util.Clock;
import sprite.*;
import sut.game04.core.HomeScreen;
import sut.game04.core.MyGame;
import tripleplay.game.Screen;
import tripleplay.game.ScreenStack;
import tripleplay.ui.Root;

import static playn.core.PlayN.assets;
import static playn.core.PlayN.graphics;


public class GameScreen extends Screen {

    public static float M_PER_PIXEL = 1 / 26.666667f;
    //Size World
    private static int width = 24;
    private static int height = 18;

    private World world;

    private Hp hh;
    private Root root;
    private DebugDrawBox2D debugDraw;
    private float x = 440f,y = 320f,xx = 580f,yy = 420f, xxx = 480f, yyy = 220f;


    private boolean showDebugDraw = false;
    private float ix = 25f , iy = 25f;
    private Image backIm,bg,attk;
    private ImageLayer backLayer,bgLayer,attkLayer ;
    private final ScreenStack ss;

    public Zealot z;
    public Zealot1 z1;
    public Zealot2 z2;


    public GameScreen(ScreenStack ss){
        this.ss = ss;
    }

    @Override
    public void wasAdded() {
        super.wasAdded();

      //  hh = new Hp(540f,50f);
      //  layer.add(hh.layer());


        //Set แรงโน้มถ่วง
        Vec2 gravity = new Vec2(0.0f,10.f);
        world = new World(gravity,true);
        world.setWarmStarting(true);
        world.setAutoClearForces(true);
        world.setContactListener(new ContactListener() {
            @Override
            public void beginContact(Contact contact) {
                if (contact.getFixtureA().getBody() == z.body() ||
                        contact.getFixtureB().getBody() == z.body()) {
                    z.contact(contact);
                }
                if (contact.getFixtureA().getBody() == z2.body() ||
                        contact.getFixtureB().getBody() == z2.body()) {
                    z2.contact(contact);
                }
                if (contact.getFixtureA().getBody() == z1.body() ||
                        contact.getFixtureB().getBody() == z1.body()) {
                    z1.contact(contact);
                }

            }

            @Override
            public void endContact(Contact contact) {

            }

            @Override
            public void preSolve(Contact contact, Manifold manifold) {

            }

            @Override
            public void postSolve(Contact contact, ContactImpulse contactImpulse) {

            }
        });


        //วาดขอบเขต Debug
        if (showDebugDraw){
            CanvasImage image = graphics().createImage(
                    (int)(width / GameScreen.M_PER_PIXEL),
                    (int)(height / GameScreen.M_PER_PIXEL));
            layer.add(graphics().createImageLayer(image));
            debugDraw = new DebugDrawBox2D();
            debugDraw.setCanvas(image);
            debugDraw.setFlipY(false);
            debugDraw.setStrokeAlpha(150);
            debugDraw.setFillAlpha(75);
            debugDraw.setStrokeWidth(2.0f);
            debugDraw.setFlags(DebugDraw.e_shapeBit|
                               DebugDraw.e_jointBit|
                               DebugDraw.e_aabbBit
            );
            debugDraw.setCamera(0,0,1f/GameScreen.M_PER_PIXEL);
            world.setDebugDraw(debugDraw);


        }
        //  พื้นดินซ้ายสุด
        Body ground = world.createBody(new BodyDef());
        PolygonShape groundShape = new PolygonShape();
        groundShape.setAsEdge(new Vec2(0.1f,height-0.5f),
                new Vec2(width-21.8f,height-0.5f));
        ground.createFixture(groundShape,0.0f);

        //พื้นดินถัดมา
        Body ground4 = world.createBody(new BodyDef());
        PolygonShape groundShape4 = new PolygonShape();
        groundShape4.setAsEdge(new Vec2(4.8f,height-0.5f),
                new Vec2(width-11f,height-0.5f));
        ground4.createFixture(groundShape4,0.0f);

        //พื้นดินถัดมา
        Body ground5 = world.createBody(new BodyDef());
        PolygonShape groundShape5 = new PolygonShape();
        groundShape5.setAsEdge(new Vec2(16.0f,height-0.5f),
                new Vec2(width-0.1f,height-0.5f));
        ground5.createFixture(groundShape5,0.0f);

        //กำแพง
        Body ground1 = world.createBody(new BodyDef());
        PolygonShape groundShape1 = new PolygonShape();
        groundShape1.setAsEdge(new Vec2(0.1f,height-5000.5f),
                new Vec2(width-0.1f,height-0.0f));
        ground1.createFixture(groundShape1,0.0f);
        //กำแพง
        Body ground2 = world.createBody(new BodyDef());
        PolygonShape groundShape2 = new PolygonShape();
        groundShape2.setAsEdge(new Vec2(0.1f,height-0.0f),
                new Vec2(width-0.1f,height-5000.5f));
        ground2.createFixture(groundShape2,0.0f);

        //ฮิฐอันแรก
        Body ground3 = world.createBody(new BodyDef());
        PolygonShape groundShape3 = new PolygonShape();
        groundShape3.setAsEdge(new Vec2(8.5f,height-5.8f),
                new Vec2(width-10f,height-5.8f));
        ground3.createFixture(groundShape3,0.0f);

        Body ground33 = world.createBody(new BodyDef());
        PolygonShape groundShape33 = new PolygonShape();
        groundShape33.setAsEdge(new Vec2(8.5f,height-4.8f),
                new Vec2(width-10f,height-4.8f));
        ground33.createFixture(groundShape33,0.0f);

        //ฮิฐอันบน
        Body ground7 = world.createBody(new BodyDef());
        PolygonShape groundShape7 = new PolygonShape();
        groundShape7.setAsEdge(new Vec2(8.5f,height-9.8f),
                new Vec2(width-8.8f,height-9.8f));
        ground7.createFixture(groundShape7,0.0f);

        Body ground77 = world.createBody(new BodyDef());
        PolygonShape groundShape77 = new PolygonShape();
        groundShape77.setAsEdge(new Vec2(8.5f,height-8.8f),
                new Vec2(width-8.8f,height-8.8f));
        ground77.createFixture(groundShape77,0.0f);

        //ฮิฐอันเดียว
        Body ground6 = world.createBody(new BodyDef());
        PolygonShape groundShape6 = new PolygonShape();
        groundShape6.setAsEdge(new Vec2(3.6f,height-5.8f),
                new Vec2(width-19.3f,height-5.8f));
        ground6.createFixture(groundShape6,0.0f);

        Body ground66 = world.createBody(new BodyDef());
        PolygonShape groundShape66 = new PolygonShape();
        groundShape66.setAsEdge(new Vec2(3.6f,height-4.8f),
                new Vec2(width-19.3f,height-4.8f));
        ground66.createFixture(groundShape66,0.0f);


        //Set พื้นหลัง
        bg = assets().getImage("images/bgbg.png");
        bgLayer = graphics().createImageLayer(bg);
        graphics().rootLayer().add(bgLayer);


        //Set ปุ่มกลับ
        backIm = assets().getImage("images/back_button.png");
        backLayer = graphics().createImageLayer(backIm);
        graphics().rootLayer().add(backLayer);
        backLayer.setTranslation(10,10);

        //Set ปุ่มชน
        attk = assets().getImage("images/menu.png");
        attkLayer = graphics().createImageLayer(attk);
        graphics().rootLayer().add(attkLayer);
        attkLayer.setTranslation(60,10);


        backLayer.addListener(new Pointer.Adapter() {
            @Override
            public void onPointerEnd(Pointer.Event event) {
                final Screen home = new TestScreen(ss);
                ss.push(home);
            }
        });

        attkLayer.addListener(new Pointer.Adapter() {
            @Override
            public void onPointerEnd(Pointer.Event event) {
                final Screen home = new HomeScreen(ss);
                ss.push(home);
            }
        });




        //เรียกกล่องที่สร้าง


        //createBox1();
       // createBox2();


        z = new Zealot(world,x,y);
        layer.add(z.layer());
        z1 = new Zealot1(world,xx,yy);
        layer.add(z1.layer());
        z2 = new Zealot2(world,xxx,yyy);
        layer.add(z2.layer());

    }


        //สร้างกล่อง
    private void createBox1(){
        BodyDef bf = new BodyDef();
        bf.type = BodyType.DYNAMIC;
        bf.position = new Vec2(0,0);
        final Body body = world.createBody(bf);
        PolygonShape shape = new PolygonShape();
        shape.setAsBox(2f,2f);
        FixtureDef fd = new FixtureDef();
        fd.shape = shape;
        fd.density = 0.1f;
        fd.friction = 0.1f;
        fd.restitution = 1f;
        body.createFixture(fd);
        body.setLinearDamping(0.5f);
        body.setTransform(new Vec2(15f,12f),0f);

        attkLayer.addListener(new Pointer.Adapter() {
            @Override
            public void onPointerEnd(Pointer.Event event) {
                body.applyLinearImpulse(new Vec2(-9999f, 0f), body.getPosition());
            }
        });
    }

    private void createBox2(){
        BodyDef bf = new BodyDef();
        bf.type = BodyType.DYNAMIC;
        bf.position = new Vec2(0,0);
        Body body = world.createBody(bf);
        PolygonShape shape = new PolygonShape();
        shape.setAsBox(1f,1f);
        FixtureDef fd = new FixtureDef();
        fd.shape = shape;
        fd.density = 0.1f;
        fd.friction = 0.1f;
        fd.restitution = 1f;
        body.createFixture(fd);
        body.setLinearDamping(0.5f);
        body.setTransform(new Vec2(8f,13f),0f);
    }

/*
    @Override
    public void wasShown() {
        super.wasShown();
        root = iface.createRoot(
                AxisLayout.vertical().gap(15),
                SimpleStyles.newSheet(), layer);
        //root.addStyles(Style.BACKGROUND.is(Background.bordered(0xFFCCCCCC, 0xFF99CCFF, 5).inset(5, 10)));
        root.setSize(width(), height());
        root.add(new Button("Back").onClick(new UnitSlot() {
            @Override
            public void onEmit() {
                ss.remove(ss.top());
            }
        }));
    }*/



    @Override
    public void update(int delta) {
        super.update(delta);
        world.step(0.033f,10,10);
        z.update(delta);
        z1.update(delta);
        z2.update(delta);
//        hh.update(delta);


    }

    @Override
    public void paint(Clock clock) {
        super.paint(clock);
        z.paint(clock);
        z1.paint(clock);
        z2.paint(clock);
        if(showDebugDraw){
            debugDraw.getCanvas().clear();
            world.drawDebugData();
        }
    }
}

