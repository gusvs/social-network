import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe('ProfileStatus', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status='Welcome' />)
        const instance = component.getInstance()
        expect(instance.state.status).toBe('Welcome')
    });
    test('after creation <span> should be displayed', () => {
        const component = create(<ProfileStatus status='Welcome' />)
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull()
    });
    test('after creation <span> should contains correct status', () => {
        const component = create(<ProfileStatus status='Welcome' />)
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe('Welcome')
    });
    test('after creation <input> should not be displayed', () => {
        const component = create(<ProfileStatus status='Welcome' />)
        const root = component.root;
        expect(() => {
            let input = root.findByType("input");
        }).toThrow()
    });
    test('input should be displayed in edit mode instead of span', () => {
        const component = create(<ProfileStatus status='Welcome' />)
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("Welcome")
    });
    test('callback should be called', () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status='Welcome' updateStatus={mockCallback}/>)
        const instance = component.getInstance()
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    });
})