.. raw:: html



``mx.symbol.choose_element_0index``
======================================================================

Description
----------------------

choose_element_0index:Choose one element from each line(row for python, column for R/Julia) in lhs according to index indicated by rhs. This function assume rhs uses 0-based index.

Usage
----------

.. code:: r

	mx.symbol.choose_element_0index(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``lhs``                                | NDArray.                                                   |
|                                        |                                                            |
|                                        | Left operand to the function.                              |
+----------------------------------------+------------------------------------------------------------+
| ``rhs``                                | NDArray.                                                   |
|                                        |                                                            |
|                                        | Right operand to the function.                             |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol



.. disqus::
   :disqus_identifier: mx.symbol.choose_element_0index
