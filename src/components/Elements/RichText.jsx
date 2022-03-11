// TitpTap
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
// import {  } from '@tiptap/'
import styled from 'styled-components'
import { ButtonIcon } from '@/components/Elements/Buttons'
import * as BoxIcon from 'react-icons/bi'
import * as Md from 'react-icons/md'

export const ContentRich = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--alternate-background);
  border-radius: 8px;
  overflow-x: hidden;
  overflow-y: auto;
  tab-size: 4;
  -webkit-overflow-scrolling: touch;

  /* word-wrap: break-word; */

  .ProseMirror {
    > * + * {
      margin-top: 0.75em;
    }

    position: relative;
    padding: 15px;
    /* white-space: pre-wrap;
    white-space: break-spaces;
    word-wrap: break-word; */
    overflow-wrap: anywhere;

    &.ProseMirror-focused {
      outline: none;
    }
  }
`

export const BarMenuEditor = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid var(--color-gray);

  @media(min-width: 620px) {
      grid-template-columns: repeat(20, 1fr);
  }
`

export const ButtonsEditor = styled(ButtonIcon)`
    font-size: calc(var(--small-font-size) * 1.5);
    padding: 5px;
    position: relative;
    border-bottom: 1px solid var(--color-gray);

  & span{
    font-size: var(--smaller-font-size);
    margin-top: -5px;
    position: absolute;
    right: -5px;
    bottom: 3px;
  }

  @media(min-width: 620px) {
     border: none
  }
`

export const MenuBar = ({ editor }) => {
  if (!editor) {
    return null
  }

  return (
    <BarMenuEditor>
      <ButtonsEditor
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'active' : ''}
      >
        <BoxIcon.BiBold />
      </ButtonsEditor>
      <ButtonsEditor
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'active' : ''}
      >
        <BoxIcon.BiItalic />
      </ButtonsEditor>
      <ButtonsEditor
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive('strike') ? 'active' : ''}
      >
        <BoxIcon.BiStrikethrough />
      </ButtonsEditor>
      <ButtonsEditor
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive('underline') ? 'active' : ''}
      >
        <BoxIcon.BiUnderline />
      </ButtonsEditor>
      <ButtonsEditor
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive('paragraph') ? 'active' : ''}
      >
        <BoxIcon.BiParagraph />
      </ButtonsEditor>
      <ButtonsEditor
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'active' : ''}
      >
        <BoxIcon.BiHeading /><span>1</span>
      </ButtonsEditor>
      <ButtonsEditor
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive('heading', { level: 3 }) ? 'active' : ''}
      >
        <BoxIcon.BiHeading /><span>3</span>
      </ButtonsEditor>
      <ButtonsEditor
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive('heading', { level: 5 }) ? 'active' : ''}
      >
        <BoxIcon.BiHeading /><span>5</span>
      </ButtonsEditor>
      <ButtonsEditor
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
      >
        <BoxIcon.BiListOl />
      </ButtonsEditor>
      <ButtonsEditor
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'active' : ''}
      >
        <BoxIcon.BiListUl />
      </ButtonsEditor>
      <ButtonsEditor
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
      >
        <Md.MdOutlineHorizontalRule />
      </ButtonsEditor>
      <ButtonsEditor
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'active' : ''}
      >
        <BoxIcon.BiUndo />
      </ButtonsEditor>
      <ButtonsEditor
        onClick={() => editor.chain().focus().redo().run()}
      >
        <BoxIcon.BiRedo />
      </ButtonsEditor>
    </BarMenuEditor>
  )
}

export const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit
    ],
    content: '<p>Hello world!</p>'
  })

  return (
    <ContentRich>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </ContentRich>
  )
}
