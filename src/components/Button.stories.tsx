import { Meta, StoryObj} from '@storybook/react'
import {Button, ButtonPropos} from './Button'

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Create account',
    },
    argTypes: {}
} as Meta <ButtonPropos>

export const Default: StoryObj <ButtonPropos>= {}