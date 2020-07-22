

``mx.symbol.Concat``
========================================

Description
----------------------

Perform an feature concat on channel dim (dim 1) over all the inputs.

Usage
----------

.. code:: r

	mx.symbol.Concat(data, num.args, dim = NULL, name = NULL)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | list, required.                                            |
|                                        |                                                            |
|                                        | List of tensors to concatenate                             |
+----------------------------------------+------------------------------------------------------------+
| ``num.args``                           | int, required.                                             |
|                                        |                                                            |
|                                        | Number of inputs to be concated.                           |
+----------------------------------------+------------------------------------------------------------+
| ``dim``                                | int, optional, default='1'.                                |
|                                        |                                                            |
|                                        | the dimension to be concated.                              |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


