

``mx.nd.fill.element.0index``
==========================================================

Description
----------------------

Fill one element of each line(row for python, column for R/Julia) in lhs according to index indicated by rhs and values indicated by mhs. This function assume rhs uses 0-based index.


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

Value
----------

``out`` The result mx.ndarray


