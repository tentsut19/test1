package sprite;

import org.jbox2d.collision.shapes.PolygonShape;
import org.jbox2d.common.Vec2;
import org.jbox2d.dynamics.*;
import org.jbox2d.dynamics.contacts.Contact;
import playn.core.*;
import playn.core.util.Callback;
import playn.core.util.Clock;
import screen.GameScreen;
import sun.java2d.loops.DrawGlyphListAA;
import tripleplay.game.UIScreen;


public class Zealot1 extends UIScreen{

    private World world;
    private int contactCheck;
    private boolean contacted;
    private Object other;
    private int spriteIndex = 0;
    private boolean hasload = false;
    private Sprite sprite;
    public static final int UPDATE_RATE=25;
    private int e = 0;
    private int hh = 100;
    private int f = 0;
    private int offset = 0;
    private float xx = 50.0f;
    private Hp hpzealot;
    private Body body;

    public Body body() {
        return body;
    }

    public enum State{
        IDLE,RUN,ATTK,IDLEL,RUNL,ATTKL,DIE
    };


    private State state = State.IDLE;

    public Zealot1(final World world, final float x_px, final float y_px){
        sprite = SpriteLoader.getSprite("images/aradin.json");
        sprite.addCallback(new Callback<Sprite>() {
            @Override
            public void onSuccess(Sprite result) {

                sprite.setSprite(spriteIndex);
                sprite.layer().setOrigin(sprite.width() / 2f,
                        sprite.height() / 2f);
                sprite.layer().setTranslation(x_px, y_px);

                body = initPhysicsBody(world,
                       GameScreen.M_PER_PIXEL * x_px,
                        GameScreen.M_PER_PIXEL * y_px);
                hasload = true;
            }

            @Override
            public void onFailure(Throwable cause) {
                PlayN.log().error("Error loading image!",cause);

            }

        });


        sprite.layer().addListener(new Pointer.Adapter(){
            @Override
            public void onPointerEnd(Pointer.Event event) {
                state = State.DIE;
                spriteIndex = -1;
                e = 0;
            }
        });


    }

    private Body initPhysicsBody(World world, float x, float y) {
        BodyDef bodyDef = new BodyDef();
        bodyDef.type = BodyType.DYNAMIC;
        bodyDef.position = new Vec2(0, 0);
        Body body = world.createBody(bodyDef);

        //EdgeShape shape = new EdgeShape();
        PolygonShape shape = new PolygonShape();
        shape.setAsBox(56 * GameScreen.M_PER_PIXEL / 2,
                sprite.layer().height() * GameScreen.M_PER_PIXEL / 2);
        FixtureDef fixtureDef = new FixtureDef();
        fixtureDef.shape = shape;
        fixtureDef.density = 1.1f;
        fixtureDef.friction = 0.1f;
        //fixtureDef.restitution = 0.35f;
        body.createFixture(fixtureDef);

        body.setLinearDamping(0.2f);
        body.setTransform(new Vec2(x, y), 0f);
        return  body;
    }

    public void contact(Contact contact) {
        contacted = true;
        contactCheck = 0;

        if (contacted){
            state = State.DIE;
        }

        if (contact.getFixtureA().getBody() == body) {
            other = contact.getFixtureB().getBody();
        } else {
            other = contact.getFixtureA().getBody();
        }

    }


    public void update(int delta) {
        if (!hasload) return;
/*
        PlayN.keyboard().setListener(new Keyboard.Listener() {

            @Override
            public void onKeyDown(Keyboard.Event event) {
                if (event.key() == Key.L) {
                    body.applyForce(new Vec2(100f, 0f), body.getPosition());
                }
                if (event.key() == Key.J) {
                    body.applyForce(new Vec2(-100f, 0f), body.getPosition());
                }
                if (event.key() == Key.I) {
                    body.applyForce(new Vec2(0f, -500f), body.getPosition());
                }


            }


            @Override
            public void onKeyTyped(Keyboard.TypedEvent typedEvent) {

            }

            @Override
            public void onKeyUp(Keyboard.Event event) {

            }
        });
        */

        e += delta;

        if (e > 180){
            switch (state) {
                case IDLE:offset = 0;
                    break;
                case ATTK:offset = 4;
                    if (spriteIndex == 6){
                        state = State.IDLE;
                    }
                    break;
                case DIE:offset = 16;
                    if (spriteIndex == 18){
                        state = State.IDLE;
                    }
                    break;

            }

            spriteIndex = offset + ((spriteIndex +1)%4);
            sprite.setSprite(spriteIndex);
            e = 0;
        }


    }

    public void paint(Clock clock) {
        if(!hasload) return;
        sprite.layer().setTranslation(
                (body.getPosition().x / GameScreen.M_PER_PIXEL) - 10,
                body.getPosition().y / GameScreen.M_PER_PIXEL);
        sprite.layer().setRotation(body.getAngle());
    }

    public Layer layer(){
        return sprite.layer();
    }
}
