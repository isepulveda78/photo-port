import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from '..'

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
  }

afterEach(cleanup)
const mockToggleModal= jest.fn()

describe('Modal Component', () => {
  //The first test will be the baseline to verify that the component is rendering. To create that test, add the following code:
  it('renders', () => {
    render(<Modal currentPhoto={currentPhoto} />)
  })

 //Create a Test to Compare Snapshots of the DOM
  it('matches snapshot DOM node structure', () => {
    // Arrange the snapshot - declare variables
    const { asFragment } = render(<Modal currentPhoto={currentPhoto} />)
    // Assert the match
    expect(asFragment()).toMatchSnapshot()
  })

})

describe('Click Event', () => {
    it('calls onClose handler', () => {
      const { getByText } = render(<Modal
        onClose={mockToggleModal}
        currentPhoto={currentPhoto}
      />)
      fireEvent.click(getByText('Close this modal'))
  
      expect(mockToggleModal).toHaveBeenCalledTimes(1)
    })
  })  