/**
 * External dependencies
 */
import { render } from '@testing-library/react';

/**
 * Internal dependencies
 */
import BannerActions from '..';

const mockHandleRemindOnClick = jest.fn();
const mockHandleDontShowAgainOnClick = jest.fn();

describe( 'BannerActions', () => {
	it( 'renders without dont show again button when remindMeCount less than 3', () => {
		const { container: bannerActionsComponent } = render(
			<BannerActions
				remindMeCount={ 0 }
				handleRemindOnClick={ mockHandleRemindOnClick }
				handleDontShowAgainOnClick={ mockHandleDontShowAgainOnClick }
			/>
		);

		expect( bannerActionsComponent ).toMatchSnapshot();
	} );

	it( 'renders with dont show again button when remindMeCount greater than or equal to 3', () => {
		const { container: bannerActionsComponent } = render(
			<BannerActions
				remindMeCount={ 3 }
				handleRemindOnClick={ mockHandleRemindOnClick }
				handleDontShowAgainOnClick={ mockHandleDontShowAgainOnClick }
			/>
		);

		expect( bannerActionsComponent ).toMatchSnapshot();
	} );
} );
