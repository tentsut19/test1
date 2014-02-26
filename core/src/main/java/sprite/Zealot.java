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


public class Zealot extends UIScreen{

    private World world;
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
    private int contactCheck;
    private boolean contacted;
    private Object other;
    private Object other1;
    private GameScreen gs;
    private int hp = 100;

    public Body body() {
        return body;
    }

    public enum State{
        IDLE,RUNR,ATTK,IDLEL,RUNL,ATTKL,DIE,KICKR,KICKL,JUMP,BOOMR,BOOML
    };


    private State state = State.IDLE;

    public Zealot(final World world, final float x_px, final float y_px){
        sprite = SpriteLoader.getSprite("images/naruto.json");
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
                state = State.ATTK;
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
        shape.setAsBox(28 * GameScreen.M_PER_PIXEL / 2,
                sprite.layer().height() * GameScreen.M_PER_PIXEL / 2);
        FixtureDef fixtureDef = new FixtureDef();
        fixtureDef.shape = shape;
        fixtureDef.density = 1.2f;
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

        if (false){
            state = State.ATTK;
        }

        if (contact.getFixtureA().getBody() == body) {
            other = contact.getFixtureB().getBody();
        } else {
            other = contact.getFixtureA().getBody();
        }

    }



    public void update(int delta) {
        if (!hasload) return;


        PlayN.keyboard().setListener(new Keyboard.Listener() {

            @Override
            public void onKeyDown(Keyboard.Event event) {
                if (event.key() == Key.F) {
                    state = State.RUNR;
                    body.applyForce(new Vec2(100f, 0f), body.getPosition());
                }
                if (event.key() == Key.S) {
                    state = State.RUNL;
                    body.applyForce(new Vec2(-100f, 0f), body.getPosition());
                }
                if (event.key() == Key.E) {
                    body.applyForce(new Vec2(0f, -800f), body.getPosition());
                }
                if (event.key() == Key.G) {
                    state = State.BOOMR;
                    spriteIndex = -1;
                    e = 0;
                    body.applyLinearImpulse(new Vec2(30f, 0f), body.getPosition());
                }
                if (event.key() == Key.A) {
                    state = State.BOOML;
                    spriteIndex = -1;
                    e = 0;
                    body.applyLinearImpulse(new Vec2(-20f, 0f), body.getPosition());
                }

                if (event.key() == Key.D) {
                    body.applyForce(new Vec2(0f, 800f), body.getPosition());
                }

                if (event.key() == Key.X) {
                    state = State.DIE;
                    spriteIndex = -1;
                    e = 0;
                }
            }

            @Override
            public void onKeyTyped(Keyboard.TypedEvent typedEvent) {

            }

            @Override
            public void onKeyUp(Keyboard.Event event) {

            }
        });

        e += delta;

        if (e > 180){
            switch (state) {
                case IDLE:offset = 0;
                    break;
                case RUNL:offset = 20;
                    break;
                case RUNR:offset = 0;
                    break;
                case ATTK:offset = 4;
                    if (spriteIndex == 6){
                        state = State.JUMP;
                    }
                    break;
                case KICKR:offset = 8;
                    if (spriteIndex == 10){
                        state = State.KICKR;
                        spriteIndex = -1;
                        e = 0;
                        body.applyLinearImpulse(new Vec2(30f, 30f), body.getPosition());
                        state = State.RUNR;
                    }
                    break;
                case KICKL:offset = 24;
                    if (spriteIndex == 26){
                        state = State.RUNL;
                    }
                    break;
                case BOOMR:offset = 12;
                    if (spriteIndex == 14){
                        state = State.RUNR;
                    }
                    break;
                case BOOML:offset = 28;
                    if (spriteIndex == 30){
                        state = State.RUNL;
                    }
                    break;
                case JUMP:
                    body.applyForce(new Vec2(10f, -800f), body.getPosition());
                    state = State.KICKR;
                    break;
                case DIE:offset = 16;
                    if (spriteIndex == 18){
                        state = State.DIE;
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
