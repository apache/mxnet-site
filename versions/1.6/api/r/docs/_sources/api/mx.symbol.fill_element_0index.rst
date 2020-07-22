

``mx.symbol.fill_element_0index``
==================================================================

Description
----------------------

fill_element_0index:Fill one element of each line(row for python, column for R/Julia) in lhs according to index indicated by rhs and values indicated by mhs. This function assume rhs uses 0-based index.

Usage
----------

.. code:: r

	mx.symbol.fill_element_0index(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``lhs``                                | NDArray.                                                   |
|                                        |                                                            |
|                                        | Left operand to the function.                              |
+----------------------------------------+------------------------------------------------------------+
| ``mhs``                                | NDArray.                                                   |
|                                        |                                                            |
|                                        | Middle operand to the function.                            |
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


