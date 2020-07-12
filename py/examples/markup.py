# Markup
# Use a markup card to display formatted content using HTML.
# ---
from telesync import site, ui

page = site['/demo']

menu = '''
<ol>
    <li>Spam</li>
    <li>Ham</li>
    <li>Eggs</li>
</ol>
'''

page['example'] = ui.markup_card(
    box='1 1 2 2',
    title='Menu',
    content=menu,
)
page.sync()