

``mx.symbol.squeeze``
==========================================

Description
----------------------

squeeze:Remove single-dimensional entries from the shape of an array.
Same behavior of defining the output tensor shape as numpy.squeeze for the most of cases.
See the following note for exception.

**Example**::

	 data = [[[0], [1], [2]]]
	 squeeze(data) = [0, 1, 2]
	 squeeze(data, axis=0) = [[0], [1], [2]]
	 squeeze(data, axis=2) = [[0, 1, 2]]
	 squeeze(data, axis=(0, 2)) = [0, 1, 2]

.. note::
	 The output of this operator will keep at least one dimension not removed. For example,
	 squeeze([[[4]]]) = [4], while in numpy.squeeze, the output will become a scalar.
	 
**Example**::

	 data = [[[0], [1], [2]]]
	 squeeze(data) = [0, 1, 2]
	 squeeze(data, axis=0) = [[0], [1], [2]]
	 squeeze(data, axis=2) = [[0, 1, 2]]
	 squeeze(data, axis=(0, 2)) = [0, 1, 2]
	
.. note::
	 The output of this operator will keep at least one dimension not removed. For example,
	 squeeze([[[4]]]) = [4], while in numpy.squeeze, the output will become a scalar.
	 
Usage
----------

.. code:: r

	mx.symbol.squeeze(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol                                          |
|                                        | data to squeeze                                            |
+----------------------------------------+------------------------------------------------------------+
| ``axis``                               | Shape or None, optional, default=None.                     |
|                                        |                                                            |
|                                        | Selects a subset of the single-dimensional entries in the  |
|                                        | shape. If an axis is selected with shape entry greater     |
|                                        | than one, an error is                                      |
|                                        | raised.                                                    |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


